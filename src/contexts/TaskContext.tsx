import React, { createContext, useReducer, useEffect } from "react";
import type { ReactNode } from "react";
import type { TaskType } from "../reducer/TaskReducer";
import { TaskReducer, type Actions } from "../reducer/TaskReducer";

interface ContextType {
  Task: TaskType[];
  dispatch: React.Dispatch<Actions>;
}

interface provideType {
  children: ReactNode;
}

export const TaskContext = createContext<ContextType>({
  Task: [],
  dispatch: () => {},
});

export const TaskProvider: React.FC<provideType> = ({ children }) => {
  const SavedData: TaskType[] = JSON.parse(
    localStorage.getItem("task") || "[]"
  );
  const [Tasks, dispatch] = useReducer(TaskReducer, SavedData);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(Tasks));
  }, [Tasks]);

  return (
    <TaskContext.Provider value={{ Task: Tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
