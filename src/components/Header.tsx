import { Link, useLocation } from "react-router-dom";
import { Search, HelpCircle, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  voiceFeedbackEnabled: boolean;
  onToggleVoiceFeedback: () => void;
  onOpenHelp: () => void;
  onOpenSearch: () => void;
}

export const Header = ({
  voiceFeedbackEnabled,
  onToggleVoiceFeedback,
  onOpenHelp,
  onOpenSearch,
}: HeaderProps) => {
  const location = useLocation();
  
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/speakify icon.png" 
            alt="Speakify Logo" 
            className="w-10 h-10 rounded-xl"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-dark))] bg-clip-text text-transparent">
            Speakify
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === "/" ? "text-primary" : "hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/tasks" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === "/tasks" ? "text-primary" : "hover:text-primary"
            }`}
          >
            Tasks
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === "/about" ? "text-primary" : "hover:text-primary"
            }`}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onOpenHelp}>
            <HelpCircle className="w-4 h-4 mr-2" />
            Help
          </Button>
          <Button variant="ghost" size="sm" onClick={onOpenSearch}>
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleVoiceFeedback}
            className={voiceFeedbackEnabled ? "text-primary" : "text-muted-foreground"}
          >
            {voiceFeedbackEnabled ? (
              <Volume2 className="w-4 h-4 mr-2" />
            ) : (
              <VolumeX className="w-4 h-4 mr-2" />
            )}
            Voice Feedback {voiceFeedbackEnabled ? "On" : "Off"}
          </Button>
        </div>
      </div>
    </header>
  );
};
