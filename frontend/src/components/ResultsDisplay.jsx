import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const ResultsDisplay = ({ results, onNewCheck }) => {
  const getRiskColor = (risk) => {
    switch (risk) {
      case "low":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "medium":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "high":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto"
      data-testid="results-display"
    >
      <div className="mb-6">
        <Button variant="ghost" onClick={onNewCheck} data-testid="new-check-button">
          <ArrowLeft className="h-4 w-4 mr-2" />
          New Check
        </Button>
      </div>

      <Alert className="mb-6 border-[#b8e4ff] bg-[#edf7ff]">
        <AlertCircle className="h-5 w-5 text-[#1b76a6]" />
        <AlertTitle className="text-[#1b76a6] font-semibold">Important Disclaimer</AlertTitle>
        <AlertDescription className="text-[#1b76a6]">
          {results.disclaimer}
        </AlertDescription>
      </Alert>

      <div className="bg-white rounded-xl shadow-sm border border-[#e3e8ef] p-6 mb-6">
        <h2 className="text-2xl font-semibold font-[var(--font-heading)] text-[#263242] mb-4">
          Analysis Results
        </h2>
        <div className="flex flex-wrap gap-3 mb-4">
          <Badge variant="outline" className="text-base py-1.5 px-3">
            Symptom: {results.primary_symptom}
          </Badge>
          <Badge variant="outline" className="text-base py-1.5 px-3">
            Duration: {results.duration}
          </Badge>
          <Badge variant="outline" className="text-base py-1.5 px-3">
            Severity: {results.severity}/10
          </Badge>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold font-[var(--font-heading)] text-[#263242] mb-4">
          Probable Conditions
        </h3>
        <div className="space-y-4">
          {results.probable_conditions.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-md transition-shadow duration-200" data-testid="result-card">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg">{condition.name}</CardTitle>
                    <Badge 
                      className={`${getRiskColor(condition.risk_level)} uppercase text-xs`}
                      data-testid="result-card-risk"
                    >
                      {condition.risk_level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm text-[#5d6b80] mb-2">
                      <span>Likelihood</span>
                      <span className="font-medium">{condition.probability}%</span>
                    </div>
                    <Progress value={condition.probability} data-testid="result-card-progress" />
                  </div>

                  <p className="text-sm text-[#5d6b80]">{condition.description}</p>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="recommendations" className="border-0">
                      <AccordionTrigger className="text-sm font-medium text-[#1f8ecb] hover:text-[#1b76a6]">
                        View Recommendations
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 mt-2">
                          {condition.recommendations.map((rec, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-[#5d6b80]">
                              <CheckCircle2 className="h-4 w-4 text-[#2bb699] mt-0.5 flex-shrink-0" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {results.general_recommendations && results.general_recommendations.length > 0 && (
        <Card className="bg-[#ecfbf7] border-[#a9ebdb]">
          <CardHeader>
            <CardTitle className="text-lg text-[#1f947f]">
              General Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {results.general_recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[#185f55]">
                  <CheckCircle2 className="h-4 w-4 text-[#1f947f] mt-0.5 flex-shrink-0" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
};

export default ResultsDisplay;