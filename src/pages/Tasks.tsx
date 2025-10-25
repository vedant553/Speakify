import { useState } from "react";
import { Header } from "@/components/Header";
import { VoiceInput } from "@/components/VoiceInput";
import { SearchBar } from "@/components/SearchBar";
import { FilterButtons, FilterType } from "@/components/FilterButtons";
import { TaskList } from "@/components/TaskList";
import { FeedbackBanner } from "@/components/FeedbackBanner";
import { HelpModal } from "@/components/HelpModal";
import { Footer } from "@/components/Footer";
import { Task } from "@/types/task";
import { useToast } from "@/hooks/use-toast";

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
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [voiceFeedbackEnabled, setVoiceFeedbackEnabled] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const { toast } = useToast();

  const handleToggleListening = () => {
    if (!isListening) {
      setIsListening(true);
      setTranscript("Add a high priority work task: finish the monthly report due tomorrow.");
      
      // Simulate speech recognition
      setTimeout(() => {
        setIsListening(false);
        handleAddTaskFromVoice();
      }, 3000);
    }
  };

  const handleAddTaskFromVoice = () => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: "Finish the monthly report",
      category: "work",
      priority: "high",
      dueDate: "Tomorrow",
      completed: false,
      createdAt: new Date(),
    };
    
    setTasks((prev) => [newTask, ...prev]);
    setFeedbackMessage("Added high priority work task: finish the monthly report due tomorrow");
    
    toast({
      title: "Task Added",
      description: "Your task has been created successfully.",
    });

    // Clear transcript after processing
    setTimeout(() => setTranscript(""), 500);
  };

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

      {feedbackMessage && (
        <FeedbackBanner
          message={feedbackMessage}
          onComplete={() => setFeedbackMessage("")}
        />
      )}

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <VoiceInput
          isListening={isListening}
          transcript={transcript}
          onToggleListening={handleToggleListening}
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
