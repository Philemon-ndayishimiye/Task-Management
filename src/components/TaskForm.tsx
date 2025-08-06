import React, { useReducer, useState } from "react";
import { Input } from "./Input";
import type { InputType, SelectType, ButtonType } from "../types/InputType";
import { SelectComp } from "./Select";
import { Button } from "./Button";
import { TaskReducer, ACTIONS } from "../reducer/TaskReducer";
import type {
  ActionType,
  payloadType,
  Actions,
  TaskType,
} from "../reducer/TaskReducer";

// interface TypeDispatch extends ActionType {}

export default function TaskForm() {
  // const SavedTask = JSON.parse(localStorage.getItem("Tasks") || "[]");
  const [tasks, dispatch] = useReducer(TaskReducer, []);
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
      type: ACTIONS.AddTask,
      payload: {
        id: formData.id,
        name: formData.name,
        priority: formData.priority,
        category: formData.category,
        date: formData.date,
        user: formData.user,
        completed: false,
      },
    });

    dispatch({
      type: ACTIONS.SavingLocal,
      payload: {
        id: formData.id,
        name: formData.name,
        priority: formData.priority,
        category: formData.category,
        date: formData.date,
        user: formData.user,
        completed: false,
      },
    });

     const SavedTasks = JSON.parse(localStorage.getItem("task") || "[]");

    setFormData({
      id: "",
      name: "",
      priority: "",
      category: "",
      date: "",
      user: "",
    });

    console.log(formData);
    // localStorage.setItem("Tasks", JSON.stringify(SavedTask));
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

      <div>
        {tasks.map((task) => (
          <span key={task.id}>
            {" "}
            {task.name} {task.priority} {task.category} {task.date} {task.user}
            {task.completed}
            <button
              className="border px-2 rounded-md"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                dispatch({
                  type: ACTIONS.RemoveTask,
                  payload: { id: task.id },
                });
              }}
            >
              {" "}
              Delete
            </button>
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                dispatch({
                  type: ACTIONS.ToggleTask,
                  payload: { id: task.id },
                });
              }}
            >
              {task.completed ? "complete" : "incomplete"}
            </button>
          </span>
        ))}
      </div>
    </>
  );
}
