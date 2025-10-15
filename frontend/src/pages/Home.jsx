import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Activity, AlertCircle, Stethoscope } from "lucide-react";
import Header from "../components/Header";
import SafetyBanner from "../components/SafetyBanner";
import SymptomForm from "../components/SymptomForm";
import ResultsDisplay from "../components/ResultsDisplay";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSymptomSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API}/symptom-check`, data);
      setResults(response.data);
      toast.success("Analysis complete");
    } catch (error) {
      console.error("Error analyzing symptoms:", error);
      toast.error("Failed to analyze symptoms. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      <Header />
      <SafetyBanner />
      
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10 mt-[7rem]">
        {!results ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Activity className="h-12 w-12 text-[#34a6e5]" />
                <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold font-[var(--font-heading)] text-[#263242]">
                  SymptomSense
                </h1>
              </div>
              <p className="text-base text-[#5d6b80] max-w-2xl mx-auto">
                Educational symptom analysis powered by AI. Enter your symptoms below to receive general health information and guidance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-[#e3e8ef] p-6 md:p-8">
              <SymptomForm onSubmit={handleSymptomSubmit} loading={loading} />
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 border border-[#e3e8ef] shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Stethoscope className="h-5 w-5 text-[#1f8ecb]" />
                  <h3 className="font-semibold text-[#263242]">AI-Powered</h3>
                </div>
                <p className="text-sm text-[#5d6b80]">Advanced analysis using GPT-4o for educational insights</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#e3e8ef] shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="h-5 w-5 text-[#1f8ecb]" />
                  <h3 className="font-semibold text-[#263242]">Educational Only</h3>
                </div>
                <p className="text-sm text-[#5d6b80]">General information, not a substitute for medical advice</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#e3e8ef] shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="h-5 w-5 text-[#1f8ecb]" />
                  <h3 className="font-semibold text-[#263242]">Quick Results</h3>
                </div>
                <p className="text-sm text-[#5d6b80]">Get instant analysis and recommendations</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <ResultsDisplay results={results} onNewCheck={() => setResults(null)} />
        )}
      </main>
    </div>
  );
};

export default Home;