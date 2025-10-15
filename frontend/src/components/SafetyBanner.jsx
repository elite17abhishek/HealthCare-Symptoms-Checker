import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { AlertCircle } from "lucide-react";

const SafetyBanner = () => {
  return (
    <div className="sticky top-[4rem] z-30 bg-[#edf7ff] border-b border-[#b8e4ff]" data-testid="safety-disclaimer-banner">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <Alert className="border-0 bg-transparent p-0">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-[#1b76a6] mt-0.5 flex-shrink-0" />
            <div>
              <AlertTitle className="font-semibold text-[#1b76a6] mb-1">
                Educational Information Only
              </AlertTitle>
              <AlertDescription className="text-sm text-[#1b76a6]">
                This tool provides general health information and is not a medical diagnosis or treatment. 
                If you have severe symptoms or suspect an emergency, call emergency services immediately. 
                Always consult qualified healthcare professionals for medical concerns.
              </AlertDescription>
            </div>
          </div>
        </Alert>
      </div>
    </div>
  );
};

export default SafetyBanner;