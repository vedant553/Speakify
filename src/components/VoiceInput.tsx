import { Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VoiceInputProps {
  isListening: boolean;
  transcript: string;
  onToggleListening: () => void;
}

export const VoiceInput = ({ isListening, transcript, onToggleListening }: VoiceInputProps) => {
  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <div className="relative">
        {/* Pulsing gradient circle effect */}
        <div className={cn(
          "absolute inset-0 rounded-full opacity-0 transition-all duration-1000",
          isListening && "animate-ping bg-gradient-to-br from-[#3ae4de]/40 to-[#3a72de]/40"
        )} />
        
        {/* Outer ring */}
        <div className={cn(
          "absolute inset-0 rounded-full border-2 transition-all duration-300",
          isListening 
            ? "bg-gradient-to-br from-[#3ae4de]/30 to-[#3a72de]/30 border-[#3ae4de]/50 scale-110" 
            : "bg-gradient-to-br from-[#3ae4de]/15 to-[#3a72de]/15 border-[#3ae4de]/30 scale-100"
        )} />
        
        <Button
          onClick={onToggleListening}
          size="lg"
          className={cn(
            "relative w-24 h-24 rounded-full transition-all duration-500 transform hover:scale-105 active:scale-95 p-[3px] overflow-hidden",
            isListening 
              ? "bg-gradient-to-br from-[#3ae4de] to-[#3a72de] shadow-lg shadow-[#3ae4de]/40"
              : "bg-gradient-to-br from-[#3ae4de] to-[#3a72de] hover:shadow-lg hover:shadow-[#3a72de]/30"
          )}
          aria-label={isListening ? "Stop listening" : "Start speaking"}
        >
          <div className={cn(
            "w-full h-full rounded-full flex items-center justify-center transition-all duration-300 relative overflow-hidden group",
            isListening 
              ? "bg-gradient-to-br from-[#3ae4de]/10 to-[#3a72de]/20 backdrop-blur-sm"
              : "bg-background/90"
          )}>
            {/* Animated gradient overlay */}
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
              isListening 
                ? "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3ae4de]/20 via-transparent to-transparent"
                : "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3a72de]/20 via-transparent to-transparent"
            )}></div>
            
            {isListening ? (
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#3ae4de] to-[#3a72de] shadow-lg shadow-[#3ae4de]/40">
                <MicOff className="w-7 h-7 text-white drop-shadow-sm" />
              </div>
            ) : (
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#3ae4de] to-[#3a72de] shadow-lg shadow-[#3a72de]/30">
                <Mic className="w-7 h-7 text-white drop-shadow-sm" />
              </div>
            )}
          </div>
        </Button>
      </div>

      <div className="text-center space-y-1">
        {isListening ? (
          <>
            <p className="text-sm font-medium text-[hsl(var(--listening))] flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--listening))] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--listening))]"></span>
              </span>
              Listening...
            </p>
            <p className="text-xs text-muted-foreground">Click to stop</p>
          </>
        ) : (
          <>
            <p className="text-sm font-medium text-foreground">Tap to speak</p>
            <p className="text-xs text-muted-foreground">Or type your task below</p>
          </>
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
