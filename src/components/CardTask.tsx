import React, { useState } from "react";
import type { TaskType } from "../reducer/TaskReducer";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Button } from "./Button";
import type { ButtonType } from "../types/InputType";
import { ACTIONS } from "../reducer/TaskReducer";
import { IoMdDoneAll } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useTask } from "../hooks/useTask";
import { Input } from "./Input";
import { SelectComp } from "./Select";
import type { SelectType, InputType } from "../types/InputType";
interface CardType extends TaskType {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface props {
  CardData: CardType;
}

export const CardTask: React.FC<props> = ({ CardData }) => {
  const [updateForm, setUpdateForm] = useState<boolean>(false);
  const [updateData, setUpdateData] = useState({
    name: "",
    user: "",
    date: "",
    category: "",
    priority: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUpdateData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

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

  const InputName: InputType = {
    name: "name",
    value: updateData.name,
    placeholder: "Enter task name",
    type: "string",
    onChange: handleChange,
  };

  const DueDate: InputType = {
    name: "date",
    value: updateData.date,
    type: "date",
    onChange: handleChange,
  };

  const AssignedUser: InputType = {
    name: "user",
    value: updateData.user,
    type: "text",
    placeholder: "Enter Assigne",
    onChange: handleChange,
  };

  const Priority: SelectType = {
    name: "priority",
    value: updateData.priority,
    options: ["Low", "Medium", "High"],
    onChange: handleSelectChange,
  };

  const Category: SelectType = {
    name: "category",
    value: updateData.category,
    options: ["Frontend", "Backend", "Meeting", "Design"],
    onChange: handleSelectChange,
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello world");
  };
  const Updatebtn: ButtonType = {
    label: "Update",
    type: "button",
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
      setUpdateForm(true);
      setUpdateData({
        name: CardData.name ?? "",
        user: CardData.user ?? "",
        date: CardData.date ?? "",
        category: CardData.category ?? "",
        priority: CardData.priority ?? "",
      });
    },
  };
  return (
    <>
      <div
        key={CardData.id}
        className={`px-[60px] py-[8px] shadow-md p-2 rounded-2xl  min-h-[250px] ${
          CardData.completed === false
            ? "bg-gray-100 shadow-sm"
            : "bg-amber-100"
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

        <div className="flex justify-between gap-8">
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

      <div>
        {updateForm && (
          <div className="flex justify-center  items-center  fixed top-[22%] left-[37%]  z-40 bg-gray-200 shadow-sm flex-col gap-2 py-[50px] px-[80px] rounded-md">
            <form onSubmit={handleSubmit}>
              <Input input={AssignedUser} />
              <Input input={InputName} />
              <SelectComp select={Priority} />
              <SelectComp select={Category} />
              <Input input={DueDate} />

              <div className="flex justify-center items-center gap-[30px] pt-[20px]">
                <button
                  className=" cursor-pointer py-1 px-5 rounded-md bg-blue-500 text-white"
                  type="submit"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    event.preventDefault();
                    dispatch({
                      type: ACTIONS.UpdateTask,
                      payload: {
                        id: CardData.id,
                        name: updateData.name,
                        priority: updateData.priority,
                        category: updateData.category,
                        date: updateData.date,
                        user: updateData.user,
                      },
                    });
                    setUpdateForm(false);
                  }}
                >
                  Edit
                </button>
                <button
                  className=" cursor-pointer py-1 px-3 rounded-md bg-red-500 text-white"
                  type="button"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    event.preventDefault();
                    setUpdateForm(false);
                    console.log("this is cancel");
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
