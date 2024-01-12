"use client";

import { Icon } from "@mui/material";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disable?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disable,
  outline,
  small,
  custom,
  icon,
  onClick,
}) => {
  return (
    <button
      disabled={disable}
      className={`
        disable: opacity-70
        disabled: cursor-not-allowed
        rounded-md
        hover:opacity-80
        transition
        w-[400px]
        shadow-lg
        flex
        justify-center
        py-3
        text-lg
        font-extrabold
        gap-2
        ${outline ? "bg-white" : "bg-green-600 "}
        ${outline ? "text-green-700" : "text-white"}
        ${small ? "text-sm font-light" : "text-md font-semibold"}
        ${small ? "py-1 px-2 border-[1px]" : "py-3 px-4 border-2 "}
        ${custom ? custom : ""}
`}
    >
      {Icon && <Icon />}
      {label}
    </button>
  );
};

export default Button;
