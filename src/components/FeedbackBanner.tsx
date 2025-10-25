import { useEffect, useState } from "react";

interface FeedbackBannerProps {
  message: string;
  onComplete: () => void;
}

export const FeedbackBanner = ({ message, onComplete }: FeedbackBannerProps) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        return prev - 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-50 animate-fade-in">
      <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
        <div className="p-4">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <div className="h-1 bg-muted">
          <div
            className="h-full gradient-primary transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
