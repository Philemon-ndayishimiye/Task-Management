import React from "react";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";

export default function Aside() {
  return (
    <div className="px-[20px]  h-full py-3 ">
      <Link to="/Add">
        <div className="py-1 px-3 flex gap-3 mt-10  hover:bg-blue-500 hover:text-white cursor-pointer">
          <div className="text-2xl">
            <IoAdd />
          </div>
          <h1 className="font-bold text-blue-800 text-lg  hover:text-white">
            Add Task
          </h1>
        </div>
      </Link>

      <Link to="/incomplete">
        <div className="flex py-1 px-3 gap-3 mt-10 cursor-pointer hover:bg-blue-500 hover:text-white">
          <div className="text-2xl">
            <MdOutlineIncompleteCircle />
          </div>
          <h1 className="font-bold text-blue-800 text-lg hover:text-white">
            Incomplete
          </h1>
        </div>
      </Link>

      <Link to="/incomplete">
        <div className="flex py-1 px-3 gap-3 mt-10 cursor-pointer hover:bg-blue-500 hover:text-white">
          <div className="text-2xl">
            <GrCompliance />
          </div>
          <h1 className="font-bold text-blue-800 text-lg hover:text-white">
            Complete
          </h1>
        </div>
      </Link>
      <Link to="/filter">
        <div className="flex py-1 px-3 gap-3 mt-10 cursor-pointer hover:bg-blue-500 hover:text-white">
          <div className="text-2xl">
            <FaFilter />
          </div>
          <h1 className="font-bold text-blue-800 text-lg hover:text-white">
            Filter
          </h1>
        </div>
      </Link>
    </div>
  );
}
