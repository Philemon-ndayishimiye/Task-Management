import React from "react";
import type { ButtonType } from "../types/InputType";

interface props {
  buttonData: ButtonType;
}

export const Button: React.FC<props> = ({ buttonData }) => {
  return (
    <button
      className="
    inline-block
    px-4 py-2
    bg-blue-600 text-white font-semibold rounded-lg
    shadow-md
    hover:bg-blue-700
    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
    transition
    cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
  "
      onClick={buttonData.onClick}
      type={buttonData.type}
    >
      {buttonData.label}
    </button>
  );
};
