export type TaskCategory = "work" | "personal" | "health" | "shopping" | "learning" | "other";
export type TaskPriority = "high" | "medium" | "low";

export interface Task {
  id: string;
  text: string;
  category: TaskCategory;
  priority: TaskPriority;
  dueDate?: string;
  completed: boolean;
  createdAt: Date;
}
