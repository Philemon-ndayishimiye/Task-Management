import React from "react";
import { useTask } from "../hooks/useTask";
import { CardTask } from "./CardTask";
import FilterComp from "./FilterComp";

export default function DisplayTask() {
  const { Task } = useTask();

  console.log(Task);
  return (
    <>
      <div>
        <FilterComp />
      </div>

      <div>
        <div>
          <h1 className="text-center font-semibold text-[23px]">All Tasks</h1>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {Task.map((task) => {
            return <CardTask key={task.id} CardData={task} />;
          })}
        </div>
      </div>
    </>
  );
}
