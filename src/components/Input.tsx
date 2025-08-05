import React from "react";

import type { InputType } from "../types/InputType";

interface props {
  input: InputType;
}

export const Input: React.FC<props> = ({ input }) => {
  return (
    <input
      name={input.name}
      type={input.type}
      value={input.value}
      onChange={input.onChange}
      placeholder={input.placeholder}
      className="
    block w-full mb-3
    border border-gray-300 rounded-md
    px-3 py-2
    text-gray-900
    placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    transition
  "
    />
  );
};
