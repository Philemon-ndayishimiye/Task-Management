import React from "react";
import { IoNotifications } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import images1 from "../assets/images.jpg";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div className=" bg-blue-400 flex justify-between py-3 px-7">
        <div>
          <Link to="/">
            <h1 className="text-white font-bold text-2xl cursor-pointer hover:text-green-400">
              Team Task Tracker
            </h1>
          </Link>
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
