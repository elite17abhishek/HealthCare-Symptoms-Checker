import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import { Loader2 } from "lucide-react";

const SymptomForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    primary_symptom: "",
    duration: "days",
    duration_value: 1,
    severity: 5,
    additional_symptoms: "",
    age_range: "",
    existing_conditions: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.primary_symptom.trim()) {
      return;
    }
    onSubmit(formData);
  };

  const handleReset = () => {
    setFormData({
      primary_symptom: "",
      duration: "days",
      duration_value: 1,
      severity: 5,
      additional_symptoms: "",
      age_range: "",
      existing_conditions: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-testid="symptom-form">
      <div>
        <Label htmlFor="primary_symptom" className="text-base font-medium text-[#263242] mb-2 block">
          Primary Symptom *
        </Label>
        <Input
          id="primary_symptom"
          value={formData.primary_symptom}
          onChange={(e) => setFormData({ ...formData, primary_symptom: e.target.value })}
          placeholder="e.g., headache, fever, cough"
          required
          data-testid="primary-symptom-input"
          className="text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="duration" className="text-base font-medium text-[#263242] mb-2 block">
            Duration
          </Label>
          <Select 
            value={formData.duration} 
            onValueChange={(value) => setFormData({ ...formData, duration: value })}
          >
            <SelectTrigger data-testid="duration-select">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hours">Hours</SelectItem>
              <SelectItem value="days">Days</SelectItem>
              <SelectItem value="weeks">Weeks</SelectItem>
              <SelectItem value="months">Months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="age_range" className="text-base font-medium text-[#263242] mb-2 block">
            Age Range
          </Label>
          <Select 
            value={formData.age_range} 
            onValueChange={(value) => setFormData({ ...formData, age_range: value })}
          >
            <SelectTrigger data-testid="age-range-select">
              <SelectValue placeholder="Select age range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-12">0-12 years</SelectItem>
              <SelectItem value="13-17">13-17 years</SelectItem>
              <SelectItem value="18-30">18-30 years</SelectItem>
              <SelectItem value="31-50">31-50 years</SelectItem>
              <SelectItem value="51-70">51-70 years</SelectItem>
              <SelectItem value="70+">70+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label className="text-base font-medium text-[#263242] mb-2 block">
          Severity: {formData.severity}/10
        </Label>
        <div className="pt-2">
          <Slider
            value={[formData.severity]}
            onValueChange={(value) => setFormData({ ...formData, severity: value[0] })}
            min={0}
            max={10}
            step={1}
            data-testid="severity-slider"
            className="mb-2"
          />
          <div className="flex justify-between text-xs text-[#5d6b80]">
            <span>Mild</span>
            <span>Moderate</span>
            <span>Severe</span>
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="additional_symptoms" className="text-base font-medium text-[#263242] mb-2 block">
          Additional Symptoms
        </Label>
        <Textarea
          id="additional_symptoms"
          value={formData.additional_symptoms}
          onChange={(e) => setFormData({ ...formData, additional_symptoms: e.target.value })}
          placeholder="Any other symptoms you're experiencing..."
          rows={3}
          data-testid="additional-symptoms-textarea"
        />
      </div>

      <div>
        <Label htmlFor="existing_conditions" className="text-base font-medium text-[#263242] mb-2 block">
          Existing Medical Conditions
        </Label>
        <Textarea
          id="existing_conditions"
          value={formData.existing_conditions}
          onChange={(e) => setFormData({ ...formData, existing_conditions: e.target.value })}
          placeholder="Any relevant medical history..."
          rows={2}
          data-testid="existing-conditions-textarea"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <Button 
          type="submit" 
          disabled={loading || !formData.primary_symptom.trim()}
          data-testid="symptom-form-submit-button"
          className="flex-1"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Check Symptoms"
          )}
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          onClick={handleReset}
          data-testid="symptom-form-reset-button"
        >
          Clear
        </Button>
      </div>
    </form>
  );
};

export default SymptomForm;