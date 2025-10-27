import { useCallback, useEffect, useRef, useState } from "react";

interface UseSpeechRecognitionOptions {
  lang?: string;
  continuous?: boolean;
  interimResults?: boolean;
  maxAlternatives?: number;
  onFinalResult?: (transcript: string) => void;
}

interface UseSpeechRecognitionResult {
  transcript: string;
  interimTranscript: string;
  isListening: boolean;
  isSupported: boolean;
  error: string | null;
  startListening: () => void;
  stopListening: () => void;
  abortListening: () => void;
  resetTranscript: () => void;
}

const getSpeechRecognitionConstructor = (): typeof SpeechRecognition | null => {
  if (typeof window === "undefined") {
    return null;
  }

  return (window.SpeechRecognition || window.webkitSpeechRecognition) ?? null;
};

export const useSpeechRecognition = (
  options: UseSpeechRecognitionOptions = {}
): UseSpeechRecognitionResult => {
  const {
    lang = "en-US",
    continuous = true,  // Changed from false to true for continuous listening
    interimResults = true,
    maxAlternatives = 1,
    onFinalResult,
  } = options;

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const finalTranscriptRef = useRef("");
  const onFinalResultRef = useRef<UseSpeechRecognitionOptions["onFinalResult"]>(onFinalResult);

  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    onFinalResultRef.current = onFinalResult;
  }, [onFinalResult]);

  useEffect(() => {
    const SpeechRecognitionConstructor = getSpeechRecognitionConstructor();

    if (!SpeechRecognitionConstructor) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    const recognition = new SpeechRecognitionConstructor();
    recognition.lang = lang;
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.maxAlternatives = maxAlternatives;

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interim = "";

      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const result = event.results[i];
        const transcriptChunk = result[0].transcript.trim();

        if (result.isFinal) {
          finalTranscriptRef.current = `${finalTranscriptRef.current} ${transcriptChunk}`.trim();
          setTranscript(finalTranscriptRef.current);
          setInterimTranscript("");
        } else {
          interim = `${interim} ${transcriptChunk}`.trim();
        }
      }

      if (interim) {
        setInterimTranscript(interim.trim());
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setError(event.error || "speech-recognition-error");
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      setInterimTranscript("");

      if (finalTranscriptRef.current) {
        setTranscript(finalTranscriptRef.current);
        onFinalResultRef.current?.(finalTranscriptRef.current);
      }
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.onstart = null;
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;

      try {
        recognition.stop();
      } catch (err) {
        // Some browsers throw if stop is called while not listening; ignore.
      }

      recognitionRef.current = null;
    };
  }, [lang, continuous, interimResults, maxAlternatives]);

  const startListening = useCallback(() => {
    const recognition = recognitionRef.current;

    if (!recognition) {
      setError("Speech recognition is not supported in this browser.");
      return;
    }

    finalTranscriptRef.current = "";
    setTranscript("");
    setInterimTranscript("");
    setError(null);

    try {
      recognition.start();
    } catch (err) {
      if (err instanceof DOMException && err.name === "InvalidStateError") {
        // Recognition is already started; ignore.
        return;
      }

      const message = err instanceof Error ? err.message : "Failed to start speech recognition.";
      setError(message);
    }
  }, []);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
  }, []);

  const abortListening = useCallback(() => {
    recognitionRef.current?.abort();
    finalTranscriptRef.current = "";
    setInterimTranscript("");
    setTranscript("");
  }, []);

  const resetTranscript = useCallback(() => {
    finalTranscriptRef.current = "";
    setTranscript("");
    setInterimTranscript("");
  }, []);

  // Add error handling for unsupported browsers
  useEffect(() => {
    if (!isSupported) {
      setError('not-supported');
    }
  }, [isSupported]);

  return {
    transcript,
    interimTranscript,
    isListening,
    isSupported,
    error,
    startListening,
    stopListening,
    abortListening,
    resetTranscript,
  };
};
