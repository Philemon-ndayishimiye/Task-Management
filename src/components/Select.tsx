import React from "react";
import type { SelectType } from "../types/InputType";

interface props {
  select: SelectType;
}

export const SelectComp: React.FC<props> = ({ select }) => {
  return (
    <select
      name={select.name}
      value={select.value}
      onChange={select.onChange}
      className="
    block w-full my-4
    border border-gray-300 rounded-md
    bg-white
    py-2 px-3
    text-gray-700
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    transition
    appearance-none
    cursor-pointer
  "
    >
      <option value="" disabled>
        {`--${select.name}--`}
      </option>
      {select.options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
