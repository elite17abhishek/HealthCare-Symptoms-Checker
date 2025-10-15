import { Link } from "react-router-dom";
import { Activity, Phone, Clock } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60" data-testid="app-header">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" data-testid="logo-link">
            <Activity className="h-6 w-6 text-[#34a6e5] transition-transform group-hover:scale-110" />
            <span className="text-xl font-semibold font-[var(--font-heading)] text-[#263242]">
              SymptomSense
            </span>
          </Link>
          
          <nav className="flex items-center gap-3">
            <Link to="/history">
              <Button variant="ghost" size="sm" data-testid="history-nav-button">
                <Clock className="h-4 w-4 mr-2" />
                History
              </Button>
            </Link>
            <a href="tel:911">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-red-200 text-red-700 hover:bg-red-50"
                data-testid="emergency-link"
              >
                <Phone className="h-4 w-4 mr-2" />
                Emergency
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;