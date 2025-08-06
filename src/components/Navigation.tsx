import React from "react";
import { Button } from "./Button";
import type { ButtonType } from "../types/InputType";
import { IoNotifications } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import TaskForm from "./TaskForm";
import images1 from "../assets/images.jpg";
import { CardTask } from "./CardTask";
import type { TaskType } from "../reducer/TaskReducer";

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

  const cardData: TaskType = {
    id: 1,
    name: "Coding",
    priority: "Low",
    category: "money",
    date: "25-3-2025",
    user: "philemon",
    createdAt: new Date().toISOString().split("T")[0],
    completed: true,
  };
  return (
    <>
      <div className=" bg-blue-400 flex justify-between py-3 px-7">
        <div>
          <h1 className="text-white font-bold text-2xl cursor-pointer hover:text-green-400">
            Team Task Tracker
          </h1>
        </div>

        <div className="flex items-center justify-center gap-[22px]">
          <div className="pt-2 relative text-white font-bold text-xl pr-2 cursor-pointer">
            <IoNotifications />
            <div className="absolute w-2 h-2 bg-red-500 rounded-full top-1 left-4  "></div>
          </div>
          <div className="pt-2 text-white font-bold text-xl  cursor-pointer">
            <FaMessage />
          </div>
          <div className="w-[40px] h-[40px] rounded-full cursor-pointer">
            {/* <Button buttonData={dataButtons} /> */}
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={images1}
              alt="philos"
            />
          </div>
        </div>
      </div>
    </>
  );
}
