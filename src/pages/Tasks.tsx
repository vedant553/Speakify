import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { VoiceInput } from "@/components/VoiceInput";
import { SearchBar } from "@/components/SearchBar";
import { FilterButtons, FilterType } from "@/components/FilterButtons";
import { TaskList } from "@/components/TaskList";
import { FeedbackBanner } from "@/components/FeedbackBanner";
import { HelpModal } from "@/components/HelpModal";
import { Footer } from "@/components/Footer";
import { Task, TaskCategory, TaskPriority } from "@/types/task";
import { useToast } from "@/hooks/use-toast";
import { useSpeechRecognition } from "@/hooks/use-speech-recognition";

// Sample tasks for demonstration
const initialTasks: Task[] = [
  {
    id: "1",
    text: "Complete weekly project report for Q3 stakeholder meeting.",
    category: "work",
    priority: "high",
    dueDate: "Tomorrow",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    text: "Schedule dentist appointment for routine check-up.",
    category: "health",
    priority: "medium",
    dueDate: "Fri, Oct 27",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "3",
    text: "Review and approve new design mockups for mobile app.",
    category: "work",
    priority: "high",
    dueDate: "Today",
    completed: true,
    createdAt: new Date(),
  },
  {
    id: "4",
    text: "Buy groceries: milk, eggs, bread, and fruits.",
    category: "shopping",
    priority: "low",
    dueDate: "Sun, Oct 29",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "5",
    text: "Prepare presentation slides for next week's team meeting.",
    category: "work",
    priority: "medium",
    dueDate: "Mon, Oct 30",
    completed: false,
    createdAt: new Date(),
  },
];

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [voiceFeedbackEnabled, setVoiceFeedbackEnabled] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const { toast } = useToast();

  const {
    transcript,
    isListening,
    startListening,
    stopListening,
    resetTranscript,
    error,
    isSupported,
  } = useSpeechRecognition({
    continuous: true,
    interimResults: true,
    lang: 'en-US',
    onFinalResult: handleVoiceCommand,
  });

  // Add error handling
  useEffect(() => {
    if (error) {
      console.error('Speech recognition error:', error);
      toast({
        title: "Speech Recognition Error",
        description: error === 'not-allowed' 
          ? "Microphone permission denied. Please allow access in browser settings."
          : `Error: ${error}`,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  // Check browser support
  useEffect(() => {
    if (!isSupported) {
      toast({
        title: "Not Supported",
        description: "Speech recognition is not supported in this browser. Please use Chrome or Edge.",
        variant: "destructive",
      });
    }
  }, [isSupported, toast]);

  const displayFeedback = useCallback((message: string) => {
    setFeedbackMessage(message);
    setIsFeedbackVisible(true);
    
    const timer = setTimeout(() => {
      setIsFeedbackVisible(false);
      setFeedbackMessage("");
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  function handleVoiceCommand(transcript: string) {
    console.log('Original transcript:', transcript);
    
    const lowerTranscript = transcript.toLowerCase().trim();
    
    // Extract task details from voice command
    let priority: TaskPriority = 'medium';
    let category: TaskCategory = 'other';
    let dueDate: string | undefined;
    
    // Extract priority
    if (lowerTranscript.includes('high priority')) {
      priority = 'high';
    } else if (lowerTranscript.includes('low priority')) {
      priority = 'low';
    } else if (lowerTranscript.includes('medium priority')) {
      priority = 'medium';
    }
    
    // Extract category (check for exact word boundaries)
    const categoryMap: { pattern: RegExp; value: TaskCategory }[] = [
      { pattern: /\b(work|office)\b/i, value: 'work' },
      { pattern: /\b(personal|private)\b/i, value: 'personal' },
      { pattern: /\b(health|medical|doctor)\b/i, value: 'health' },
      { pattern: /\b(shopping|groceries|buy)\b/i, value: 'shopping' },
      { pattern: /\b(learning|study|course)\b/i, value: 'learning' }
    ];
    
    for (const { pattern, value } of categoryMap) {
      if (pattern.test(lowerTranscript)) {
        category = value;
        break;
      }
    }
    
    // Extract due date
    const today = new Date();
    if (/\btoday\b/i.test(lowerTranscript)) {
      dueDate = 'Today';
    } else if (/\btomorrow\b/i.test(lowerTranscript)) {
      dueDate = 'Tomorrow';
    } else if (/\bin (\d+) days?\b/i.test(lowerTranscript)) {
      const match = lowerTranscript.match(/in (\d+) days?/i);
      if (match) {
        const days = parseInt(match[1], 10);
        const futureDate = new Date(today);
        futureDate.setDate(futureDate.getDate() + days);
        dueDate = futureDate.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        });
      }
    }
    
    // Extract task text - IMPROVED VERSION
    let taskText = transcript.trim();
    
    // Only remove trigger words at the START
    const triggerPatterns = [
      /^(add|create|new|make|set)\s+(a\s+)?(task|reminder|note)?\s*/i,
      /^(remind\s+me\s+to|reminder\s+to)\s+/i
    ];
    
    for (const pattern of triggerPatterns) {
      taskText = taskText.replace(pattern, '');
    }
    
    // Remove priority keywords
    taskText = taskText.replace(/\b(high|medium|low)\s+priority\b/gi, '');
    
    // Remove date references at the END or with specific prepositions
    taskText = taskText.replace(/\s+(for|by|on|due)\s+(today|tomorrow)/gi, '');
    taskText = taskText.replace(/\s+in\s+\d+\s+days?\b/gi, '');
    
    // Clean up extra spaces
    taskText = taskText.replace(/\s+/g, ' ').trim();
    
    console.log('Extracted task text:', taskText);
    
    if (taskText && taskText.length > 0) {
      addTaskFromVoice(taskText, category, priority, dueDate);
    } else {
      displayFeedback("I couldn't understand the task. Please try again.");
      toast({
        title: "Error",
        description: "Could not extract task from voice command.",
        variant: "destructive",
      });
    }
  }

  function addTaskFromVoice(text: string, category: TaskCategory, priority: TaskPriority, dueDate?: string) {
    const newTask: Task = {
      id: Date.now().toString(),
      text: text,
      category,
      priority,
      dueDate,
      completed: false,
      createdAt: new Date(),
    };
    
    setTasks(prev => [newTask, ...prev]);
    
    // Create feedback message
    let feedback = `Added ${priority} priority `;
    if (category !== 'other') {
      feedback += `${category} `;
    }
    feedback += `task: ${text}`;
    if (dueDate) {
      feedback += ` (due ${dueDate})`;
    }
    
    displayFeedback(feedback);
    
    toast({
      title: "Task Added",
      description: "Your task has been created successfully.",
    });
    
    // Don't reset transcript here to avoid cutting off continuous recognition
  }

  const handleToggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    toast({
      title: "Task Deleted",
      description: "The task has been removed.",
      variant: "destructive",
    });
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "all" || task.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        voiceFeedbackEnabled={voiceFeedbackEnabled}
        onToggleVoiceFeedback={() => setVoiceFeedbackEnabled(!voiceFeedbackEnabled)}
        onOpenHelp={() => setHelpModalOpen(true)}
        onOpenSearch={() => {}}
      />

      {isFeedbackVisible && feedbackMessage && (
        <FeedbackBanner
          message={feedbackMessage}
          onComplete={() => {
            setIsFeedbackVisible(false);
            setFeedbackMessage("");
          }}
        />
      )}

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <VoiceInput
          isListening={isListening}
          transcript={transcript}
          onToggleListening={() => {
            if (isListening) {
              stopListening();
            } else {
              resetTranscript();
              startListening();
            }
          }}
        />

        <div className="space-y-6 mt-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          
          <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />

          <TaskList
            tasks={filteredTasks}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        </div>
      </main>

      <Footer />

      <HelpModal open={helpModalOpen} onClose={() => setHelpModalOpen(false)} />
    </div>
  );
};

export default Index;
