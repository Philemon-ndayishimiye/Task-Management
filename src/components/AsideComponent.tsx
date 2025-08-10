import React from "react";

const ClassVariant = {
  defolt: "text-green-500",
  primary: "text-blue-500",
  secondary: "text-red-500",
} as const;

type VariantType = "defolt" | "primary" | "secondary";

interface AsideType {
  icons: React.ReactNode;
  action: string;
  variant: VariantType;
}

export default function AsideComponent({ icons, action, variant }: AsideType) {
  return (
    <div className="flex py-1 px-3 gap-3 mt-10 cursor-pointer hover:bg-blue-500 hover:text-white">
      <div className="text-2xl">{icons}</div>
      <h1
        className={` ${ClassVariant[variant]} font-bold text-blue-800 text-lg hover:text-white`}
      >
        {action}
      </h1>
    </div>
  );
}
