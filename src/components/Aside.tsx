import React from "react";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <div className="px-[20px]  h-full py-3 ">
      <Link to="/Add">
        <div className="flex gap-3 cursor-pointer">
          <div className="text-2xl">
            <IoAdd />
          </div>
          <h1 className="font-bold text-blue-800 text-lg ">Add Task</h1>
        </div>
      </Link>
    </div>
  );
}
