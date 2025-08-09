import React from "react";
import { useTask } from "../hooks/useTask";
import { CardTask } from "./CardTask";

export default function IncompleteComp() {
  const { Task } = useTask();

  const incompleteTask = Task.filter((task) => task.completed === false);
  return (
    <>
      <div>
        <h1 className="text-center font-semibold text-[23px]">All Tasks</h1>
      </div>

      <div className=" mt-[20px] flex flex-wrap gap-4">
        {incompleteTask.map((tasks) => {
          return <CardTask key={tasks.id} CardData={tasks} />;
        })}
      </div>
    </>
  );
}
