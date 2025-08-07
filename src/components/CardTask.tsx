import React from "react";
import type { TaskType } from "../reducer/TaskReducer";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Button } from "./Button";
import type { ButtonType } from "../types/InputType";
import { ACTIONS } from "../reducer/TaskReducer";
import { IoMdDoneAll } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useTask } from "../hooks/useTask";

interface CardType extends TaskType {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface props {
  CardData: CardType;
}

export const CardTask: React.FC<props> = ({ CardData }) => {
  const { dispatch } = useTask();

  const Deletebtn: ButtonType = {
    label: "Delete",
    type: "button",
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
      dispatch({
        type: ACTIONS.RemoveTask,
        payload: { id: CardData.id },
      });
    },
  };

  const Updatebtn: ButtonType = {
    label: "Update",
    type: "button",
  };
  return (
    <div
      key={CardData.id}
      className={`px-[20px] py-[8px] shadow-md p-2 rounded-2xl ${
        CardData.completed === false ? "bg-red-50" : "bg-green-50"
      } `}
    >
      <span className="pl-[33%] text-[15px] text-green-900 font-bold">
        {CardData.completed === false ? "incomplete" : "complete"}
      </span>
      <div className="flex justify-between">
        <div className="w-[38px] h-[38px] cursor-pointer bg-blue-800 text-font text-white flex items-center justify-center rounded-full">
          <h1 className="text-3xl">
            {CardData.user?.charAt(0).toLocaleUpperCase()}
          </h1>
        </div>
        <div className="flex gap-3 text-2xl">
          <div className="relative">
            <IoIosNotificationsOutline className="text-gray-500  cursor-pointer" />
            <h1 className="absolute text-red-500 text-[15px] left-4.5 top-[-10px]  font-bold">
              3
            </h1>
          </div>
          {CardData.completed === false ? (
            <IoClose
              className="cursor-pointer text-red-500"
              onClick={(event: React.MouseEvent<SVGElement>) => {
                dispatch({
                  type: ACTIONS.ToggleTask,
                  payload: { id: CardData.id },
                });
              }}
            />
          ) : (
            <IoMdDoneAll
              className="cursor-pointer text-green-800"
              onClick={(event: React.MouseEvent<SVGElement>) => {
                dispatch({
                  type: ACTIONS.ToggleTask,
                  payload: { id: CardData.id },
                });
              }}
            />
          )}
        </div>
      </div>

      <div className="py-3">
        <div>
          <h1 className="font-bold text-black text-lg">{CardData.user}</h1>
          <p className="text-gray-500 py-1">{CardData.name}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="font-bold text-black text-md">category</p>
          <h1 className="text-gray-500 text-[15px] py-1">
            {CardData.category}
          </h1>
        </div>
        <div>
          <p className="font-bold text-black text-md">priority</p>
          <h1 className="text-gray-500 text-[15px] py-1">
            {CardData.priority}
          </h1>
        </div>
        <div>
          <p className="font-bold text-black text-md">created at</p>
          <h1 className="text-gray-500 text-[15px] py-1">
            {CardData.createdAt}
          </h1>
        </div>
        <div>
          <p className="font-bold text-black text-md">due date</p>
          <h1 className="text-gray-500 text-[15px] py-1">{CardData.date}</h1>
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <Button buttonData={Deletebtn} />
        <Button buttonData={Updatebtn} />
      </div>
    </div>
  );
};
