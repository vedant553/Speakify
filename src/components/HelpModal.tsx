import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlusCircle, CheckCircle, Trash2, Filter, Search } from "lucide-react";

interface HelpModalProps {
  open: boolean;
  onClose: () => void;
}

const commandExamples = [
  {
    category: "Task Management",
    icon: PlusCircle,
    commands: [
      { example: "Add 'Buy groceries' for tomorrow", action: "Create a new task" },
      { example: "Complete 'Finish report'", action: "Mark task as complete" },
      { example: "Delete 'Meeting reminder'", action: "Remove a task" },
    ],
  },
  {
    category: "Filtering & Search",
    icon: Filter,
    commands: [
      { example: "Show me urgent tasks", action: "Filter tasks by priority" },
      { example: "Search for 'project Alpha'", action: "Find tasks by keyword" },
      { example: "Show personal tasks due today", action: "Filter by multiple criteria" },
    ],
  },
];

export const HelpModal = ({ open, onClose }: HelpModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Voice Commands Reference</DialogTitle>
          <DialogDescription>
            Unlock hands-free productivity with Speakify! Here are some examples of voice commands you can use.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {commandExamples.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.category}>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Icon className="w-5 h-5 text-primary" />
                  {section.category}
                </h3>
                <div className="space-y-2">
                  {section.commands.map((cmd, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-[1fr,auto,1fr] gap-4 p-3 rounded-lg bg-muted/50 items-center"
                    >
                      <div className="text-sm">{cmd.example}</div>
                      <div className="text-muted-foreground">→</div>
                      <div className="text-sm text-muted-foreground">{cmd.action}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};
