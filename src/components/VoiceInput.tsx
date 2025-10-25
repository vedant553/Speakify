import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceInputProps {
  isListening: boolean;
  transcript: string;
  onToggleListening: () => void;
}

export const VoiceInput = ({ isListening, transcript, onToggleListening }: VoiceInputProps) => {
  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <div className="relative">
        <Button
          onClick={onToggleListening}
          size="lg"
          className={`w-24 h-24 rounded-full transition-all ${
            isListening
              ? "bg-[hsl(var(--listening))] hover:bg-[hsl(var(--listening-glow))] pulse-listening"
              : "gradient-primary hover:opacity-90"
          }`}
        >
          <Mic className="w-10 h-10 text-white" />
        </Button>
      </div>

      <div className="text-center space-y-2">
        {isListening ? (
          <p className="text-sm font-medium text-[hsl(var(--listening))]">Listening...</p>
        ) : (
          <p className="text-sm text-muted-foreground">Tap to speak</p>
        )}
      </div>

      {transcript && (
        <div className="w-full max-w-xl bg-card border border-border rounded-xl p-4 shadow-sm">
          <p className="text-sm text-foreground">{transcript}</p>
        </div>
      )}

      {!transcript && !isListening && (
        <p className="text-sm text-muted-foreground max-w-md text-center">
          Try saying: "Add high priority work task finish report due tomorrow"
        </p>
      )}
    </div>
  );
};
