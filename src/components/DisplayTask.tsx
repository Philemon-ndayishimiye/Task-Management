import React from "react";
import { useTask } from "../hooks/useTask";
import { CardTask } from "./CardTask";
import FilterComp from "./FilterComp";

export default function DisplayTask() {
  const { Task } = useTask();
  return (
    <>
      <div>
        <FilterComp />
      </div>

      <div>
        <div>
          <h1 className="text-center font-semibold text-[23px]">All Tasks</h1>
        </div>

        <div className=" mt-[20px] flex flex-wrap gap-4">
          {Task.map((task) => {
            return <CardTask key={task.id} CardData={task} />;
          })}
        </div>
      </div>
    </>
  );
}
