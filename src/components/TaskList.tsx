import { TaskItem } from "./TaskItem";
import { Task } from "@/types/task";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskList = ({ tasks, onToggleComplete, onDelete }: TaskListProps) => {
  const activeTasks = tasks.filter((t) => !t.completed).length;
  const totalTasks = tasks.length;

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-6">
        <div className="text-6xl">📋</div>
        <div className="text-center space-y-2">
          <p className="text-2xl font-semibold">0 tasks</p>
          <p className="text-muted-foreground max-w-md">
            You're all caught up! Use the microphone or type below to add your first task.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Tasks</h2>
        <p className="text-sm text-muted-foreground">
          {activeTasks} of {totalTasks} tasks remaining
        </p>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
