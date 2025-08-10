import type { ActionType } from "../types/reducerType";
export interface TaskType {
  id?: string | number;
  name?: string;
  date?: string;
  priority?: string;
  category?: string;
  user?: string;
  completed?: boolean;
  createdAt?: string;
}

// every action must have its type and pyaload

export function TaskReducer(Tasks: TaskType[], action: ActionType): TaskType[] {
  switch (action.type) {
    case "Add Task":
      return [
        ...Tasks,
        {
          id: action.payload.id,
          name: action.payload.name,
          priority: action.payload.priority,
          category: action.payload.category,
          date: action.payload.date,
          user: action.payload.user,
          completed: false,
          createdAt: new Date().toISOString().split("T")[0],
        },
      ];

    case "Remove task":
      const UpdateTask = Tasks.filter((task) => task.id !== action.payload.id);
      return UpdateTask;

    case "Update Task":
      const updatedTasks = Tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            id: task.id,
            name: action.payload.name,
            date: action.payload.date,
            priority: action.payload.priority,
            category: action.payload.category,
            completed: task.completed,
            createdAt: task.createdAt,
            user: action.payload.user,
          };
        } else {
          return {
            id: task.id,
            name: task.name,
            date: task.date,
            priority: task.priority,
            category: task.category,
            completed: task.completed,
            createdAt: task.createdAt,
            user: task.user,
          };
        }
      });

      return updatedTasks;

    case "Toggle Task":
      return Tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return Tasks;
  }
}
