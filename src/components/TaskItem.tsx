import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2, Briefcase, ShoppingCart, Heart, BookOpen, User, FileText, Calendar } from "lucide-react";
import { Task } from "@/types/task";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const categoryConfig = {
  work: { icon: Briefcase, color: "hsl(var(--category-work))", bg: "hsl(var(--category-work) / 0.1)" },
  personal: { icon: User, color: "hsl(var(--category-personal))", bg: "hsl(var(--category-personal) / 0.1)" },
  health: { icon: Heart, color: "hsl(var(--category-health))", bg: "hsl(var(--category-health) / 0.1)" },
  shopping: { icon: ShoppingCart, color: "hsl(var(--category-shopping))", bg: "hsl(var(--category-shopping) / 0.1)" },
  learning: { icon: BookOpen, color: "hsl(var(--category-learning))", bg: "hsl(var(--category-learning) / 0.1)" },
  other: { icon: FileText, color: "hsl(var(--category-other))", bg: "hsl(var(--category-other) / 0.1)" },
};

const priorityConfig = {
  high: { color: "hsl(var(--priority-high))", bg: "hsl(var(--priority-high) / 0.1)" },
  medium: { color: "hsl(var(--priority-medium))", bg: "hsl(var(--priority-medium) / 0.1)" },
  low: { color: "hsl(var(--priority-low))", bg: "hsl(var(--priority-low) / 0.1)" },
};

export const TaskItem = ({ task, onToggleComplete, onDelete }: TaskItemProps) => {
  const CategoryIcon = categoryConfig[task.category].icon;
  const categoryStyle = categoryConfig[task.category];
  const priorityStyle = priorityConfig[task.priority];

  return (
    <div
      className="group bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-all animate-fade-in"
      style={{ borderLeftWidth: "4px", borderLeftColor: categoryStyle.color }}
    >
      <div className="flex items-start gap-3">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggleComplete(task.id)}
          className="mt-1"
        />

        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium mb-2 ${task.completed ? "line-through text-muted-foreground" : ""}`}>
            {task.text}
          </p>

          <div className="flex flex-wrap gap-2">
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium"
              style={{ backgroundColor: categoryStyle.bg, color: categoryStyle.color }}
            >
              <CategoryIcon className="w-3 h-3" />
              {task.category}
            </span>

            <span
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium capitalize"
              style={{ backgroundColor: priorityStyle.bg, color: priorityStyle.color }}
            >
              {task.priority}
            </span>

            {task.dueDate && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {task.dueDate}
              </span>
            )}
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(task.id)}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Trash2 className="w-4 h-4 text-destructive" />
        </Button>
      </div>
    </div>
  );
};
