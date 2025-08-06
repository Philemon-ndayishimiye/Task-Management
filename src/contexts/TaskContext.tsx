import React, { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { TaskType } from "../reducer/TaskReducer";

interface ContextType {
  Task: TaskType[];
}

interface provideType {
  children: ReactNode;
}

export const TaskContext = createContext<ContextType>({ Task: [] });

export const TaskProvider: React.FC<provideType> = ({ children }) => {
  const [Tasks, setTasks] = useState<TaskType[]>(() => {
    return JSON.parse(localStorage.getItem("task") || "[]");
  });

  return (
    <TaskContext.Provider value={{ Task: Tasks }}>
      {children}
    </TaskContext.Provider>
  );
};
