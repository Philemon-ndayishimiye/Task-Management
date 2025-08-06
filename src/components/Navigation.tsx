import React from "react";
import { Button } from "./Button";
import type { ButtonType } from "../types/InputType";
import TaskForm from "./TaskForm";

export default function Navigation() {
  const [hidden, setIshidden] = React.useState(false);
  const handleCLick = () => {
    setIshidden(!false);
  };

  const dataButtons: ButtonType = {
    label: "Add Tak ",
    onClick: handleCLick,
    type: "button",
  };
  return (
    <>
      <div className="w-full bg-blue-400 pb-7 flex justify-between">
        <div>
          <h1>Team Task Tracker</h1>
        </div>
        <div>
          <Button buttonData={dataButtons} />
        </div>
      </div>

      <div>
        {" "}
        <TaskForm />
      </div>
    </>
  );
}
