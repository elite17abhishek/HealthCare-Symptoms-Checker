from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from emergentintegrations.llm.chat import LlmChat, UserMessage

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# LLM Configuration
EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class SymptomCheckInput(BaseModel):
    primary_symptom: str
    duration: str
    duration_value: Optional[int] = None
    severity: int = Field(ge=0, le=10)
    additional_symptoms: Optional[str] = None
    age_range: Optional[str] = None
    existing_conditions: Optional[str] = None

class ProbableCondition(BaseModel):
    name: str
    probability: int
    risk_level: str
    description: str
    recommendations: List[str]

class SymptomCheckResult(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    primary_symptom: str
    duration: str
    severity: int
    additional_symptoms: Optional[str] = None
    probable_conditions: List[ProbableCondition]
    general_recommendations: List[str]
    disclaimer: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class SymptomHistory(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    primary_symptom: str
    severity: int
    timestamp: str

@api_router.get("/")
async def root():
    return {"message": "SymptomSense API - Healthcare Symptom Checker"}

@api_router.post("/symptom-check", response_model=SymptomCheckResult)
async def analyze_symptoms(input_data: SymptomCheckInput):
    try:
        # Initialize LLM chat
        chat = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=f"symptom-check-{uuid.uuid4()}",
            system_message="""You are a medical AI assistant providing educational information only. 
            Your role is to suggest POSSIBLE conditions based on symptoms and provide general health guidance.
            
            CRITICAL DISCLAIMERS:
            - You are NOT providing medical diagnosis or treatment advice
            - This is educational information only
            - Users should always consult healthcare professionals for actual medical advice
            - In emergencies, users should call emergency services immediately
            
            Provide responses in a structured format with:
            1. 2-4 probable conditions with confidence levels (0-100%)
            2. Risk levels (low/medium/high)
            3. Brief descriptions
            4. General recommendations (not medical advice)
            
            Be compassionate, clear, and non-alarming in your language."""
        ).with_model("openai", "gpt-4o")
        
        # Build detailed prompt
        symptom_details = f"""
Primary Symptom: {input_data.primary_symptom}
Duration: {input_data.duration}
Severity (0-10): {input_data.severity}
"""
        
        if input_data.additional_symptoms:
            symptom_details += f"Additional Symptoms: {input_data.additional_symptoms}\n"
        
        if input_data.age_range:
            symptom_details += f"Age Range: {input_data.age_range}\n"
        
        if input_data.existing_conditions:
            symptom_details += f"Existing Conditions: {input_data.existing_conditions}\n"
        
        prompt = f"""{symptom_details}

Based on these symptoms, provide:
1. List 2-4 probable conditions with probability percentages (be realistic, rarely above 70%)
2. Assign risk levels (low/medium/high) based on severity and symptoms
3. Brief description of each condition (1-2 sentences)
4. 3-5 general recommendations (stay hydrated, rest, monitor symptoms, when to seek care)

Format your response as JSON:
{{
  "probable_conditions": [
    {{
      "name": "Condition Name",
      "probability": 45,
      "risk_level": "low",
      "description": "Brief description",
      "recommendations": ["Recommendation 1", "Recommendation 2"]
    }}
  ],
  "general_recommendations": ["General advice 1", "General advice 2"]
}}

Remember: Be conservative with probabilities, emphasize when to seek medical care.
"""
        
        # Get LLM response
        user_message = UserMessage(text=prompt)
        response = await chat.send_message(user_message)
        
        # Parse LLM response
        import json
        try:
            # Extract JSON from response
            response_text = response.strip()
            if "```json" in response_text:
                response_text = response_text.split("```json")[1].split("```")[0].strip()
            elif "```" in response_text:
                response_text = response_text.split("```")[1].split("```")[0].strip()
            
            llm_data = json.loads(response_text)
        except json.JSONDecodeError:
            # Fallback if JSON parsing fails
            llm_data = {
                "probable_conditions": [
                    {
                        "name": "Unable to analyze",
                        "probability": 0,
                        "risk_level": "low",
                        "description": "We couldn't analyze your symptoms properly. Please consult a healthcare provider.",
                        "recommendations": ["Consult a healthcare professional"]
                    }
                ],
                "general_recommendations": ["Seek medical attention if symptoms persist or worsen"]
            }
        
        # Create result object
        result = SymptomCheckResult(
            primary_symptom=input_data.primary_symptom,
            duration=input_data.duration,
            severity=input_data.severity,
            additional_symptoms=input_data.additional_symptoms,
            probable_conditions=[ProbableCondition(**cond) for cond in llm_data["probable_conditions"]],
            general_recommendations=llm_data.get("general_recommendations", []),
            disclaimer="This is educational information only and not medical advice. If you have severe symptoms or suspect an emergency, call emergency services immediately. Always consult qualified healthcare professionals for medical concerns."
        )
        
        # Store in database
        doc = result.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        doc['probable_conditions'] = [cond.model_dump() if hasattr(cond, 'model_dump') else cond for cond in doc['probable_conditions']]
        
        await db.symptom_checks.insert_one(doc)
        
        return result
        
    except Exception as e:
        logging.error(f"Error analyzing symptoms: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error analyzing symptoms: {str(e)}")

@api_router.get("/symptom-history", response_model=List[SymptomHistory])
async def get_symptom_history(limit: int = 50):
    try:
        # Get recent symptom checks
        checks = await db.symptom_checks.find(
            {},
            {"_id": 0, "id": 1, "primary_symptom": 1, "severity": 1, "timestamp": 1}
        ).sort("timestamp", -1).limit(limit).to_list(limit)
        
        return checks
        
    except Exception as e:
        logging.error(f"Error fetching history: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error fetching history: {str(e)}")

@api_router.get("/symptom-check/{check_id}")
async def get_symptom_check_detail(check_id: str):
    try:
        check = await db.symptom_checks.find_one({"id": check_id}, {"_id": 0})
        if not check:
            raise HTTPException(status_code=404, detail="Symptom check not found")
        return check
    except HTTPException:
        raise
    except Exception as e:
        logging.error(f"Error fetching symptom check: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error fetching symptom check: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()