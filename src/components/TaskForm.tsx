import React, { useState } from "react";
import { Input } from "./Input";
import type { InputType, SelectType, ButtonType } from "../types/InputType";
import { SelectComp } from "./Select";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { useTask } from "../hooks/useTask";

export default function TaskForm() {
  const { dispatch } = useTask();
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    priority: "",
    category: "",
    date: "",
    user: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const IdInput: InputType = {
    name: "id",
    value: formData.id,
    placeholder: "type Id",
    type: "number",
    onChange: handleChange,
  };

  const InputName: InputType = {
    name: "name",
    value: formData.name,
    placeholder: "Enter task name",
    type: "string",
    onChange: handleChange,
  };

  const DueDate: InputType = {
    name: "date",
    value: formData.date,
    type: "date",
    onChange: handleChange,
  };

  const AssignedDate: InputType = {
    name: "assigned",
    value: new Date().toISOString().split("T")[0],
    type: "text",
  };

  const AssignedUser: InputType = {
    name: "user",
    value: formData.user,
    type: "text",
    placeholder: "Enter Assigne",
    onChange: handleChange,
  };

  const Priority: SelectType = {
    name: "priority",
    value: formData.priority,
    options: ["Low", "Medium", "High"],
    onChange: handleSelectChange,
  };

  const Category: SelectType = {
    name: "category",
    value: formData.category,
    options: ["Frontend", "Backend", "Meeting", "Design"],
    onChange: handleSelectChange,
  };

  const buttonDat: ButtonType = {
    label: "Add Task",
    type: "submit",
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello world");

    // SavedTask.push(formData);

    dispatch({
      type: "Add Task",
      payload: {
        id: formData.id,
        name: formData.name,
        priority: formData.priority,
        category: formData.category,
        date: formData.date,
        user: formData.user,
        completed: false,
        createdAt: new Date().toISOString().split("T")[0],
      },
    });

    setFormData({
      id: "",
      name: "",
      priority: "",
      category: "",
      date: "",
      user: "",
    });

    Navigate("/");
  };

  return (
    <>
      <div className="mt-15 px-[30%]">
        <form onSubmit={handleSubmit}>
          <Input input={IdInput} />
          <Input input={InputName} />
          <SelectComp select={Priority} />
          <SelectComp select={Category} />
          <Input input={AssignedDate} />
          <Input input={DueDate} />
          <Input input={AssignedUser} />

          <Button buttonData={buttonDat} />
        </form>
      </div>
    </>
  );
}
