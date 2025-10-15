import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Clock, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SafetyBanner from "../components/SafetyBanner";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Skeleton } from "../components/ui/skeleton";
import { Badge } from "../components/ui/badge";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const History = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get(`${API}/symptom-history`);
      setHistory(response.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity) => {
    if (severity <= 3) return "bg-emerald-100 text-emerald-700";
    if (severity <= 6) return "bg-blue-100 text-blue-700";
    return "bg-amber-100 text-amber-700";
  };

  const formatDate = (timestamp) => {
    try {
      return new Date(timestamp).toLocaleString();
    } catch {
      return timestamp;
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      <Header />
      <SafetyBanner />
      
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10 mt-[7rem]">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            data-testid="back-to-home-button"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Checker
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-8 w-8 text-[#34a6e5]" />
            <h1 className="text-3xl sm:text-4xl tracking-tight font-semibold font-[var(--font-heading)] text-[#263242]">
              Symptom History
            </h1>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : history.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Clock className="h-12 w-12 text-[#cdd6e1] mx-auto mb-4" />
                <p className="text-[#5d6b80] mb-4">No symptom checks yet</p>
                <Button onClick={() => navigate("/")} data-testid="start-first-check-button">
                  Start Your First Check
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4" data-testid="history-list">
              {history.map((check) => (
                <motion.div
                  key={check.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-200" data-testid="history-item">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">
                            {check.primary_symptom}
                          </CardTitle>
                          <p className="text-sm text-[#5d6b80]">
                            {formatDate(check.timestamp)}
                          </p>
                        </div>
                        <Badge className={getSeverityColor(check.severity)} data-testid="severity-badge">
                          Severity: {check.severity}/10
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default History;