import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("use useTask in proper way");
  } else {
    return context;
  }
};
