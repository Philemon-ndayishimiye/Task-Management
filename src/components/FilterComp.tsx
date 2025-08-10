import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { SelectComp } from "../components/Select";
import type { InputType, SelectType, ButtonType } from "../types/InputType";
import { useTask } from "../hooks/useTask";
import type { TaskType } from "../reducer/TaskReducer";
import { CardTask } from "./CardTask";

export default function FilterComp() {
  const { Task } = useTask();

  // const [filterData, setFilter] = useState<TaskType[]>([]);
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
    label: "Filter",
    type: "submit",
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const FilterData = Task.filter((tasks) => {
    return (
      tasks.name === formData.name ||
      tasks.user === formData.user ||
      tasks.priority === formData.priority ||
      tasks.date === formData.date ||
      tasks.category === formData.category ||
      tasks.user === formData.user
    );
  });

  // setFilter(FilterData);
  return (
    <>
      <div className="py-[40px] px-[30px]">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-7">
            <Input input={AssignedUser} />
            <Input input={InputName} />
          </div>

          <div className="flex gap-7">
            <SelectComp select={Priority} />
            <SelectComp select={Category} />
          </div>

          <div className="flex gap-7 mr-[49%]">
            <Input input={DueDate} />
          </div>

          <div className="flex justify-center items-center">
            <Button buttonData={buttonDat} />
          </div>
        </form>
      </div>

      <div className="mt-[20px] flex flex-wrap gap-4">
        {FilterData.map((data) => {
          return <CardTask key={data.id} CardData={data} />;
        })}
      </div>
    </>
  );
}
