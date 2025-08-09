import React from "react";
import { useTask } from "../hooks/useTask";
import { CardTask } from "./CardTask";

export default function CompleteComp() {
  const { Task } = useTask();

  const CompleteTask = Task.filter((task) => task.completed === true);
  return (
    <>
      <div className="py-[30px]">
        <h1 className="text-center font-semibold text-[23px]">
          Complete Tasks
        </h1>
      </div>

      <div className=" mt-[20px] flex flex-wrap gap-4">
        {CompleteTask.map((tasks) => {
          return <CardTask key={tasks.id} CardData={tasks} />;
        })}
      </div>
    </>
  );
}
