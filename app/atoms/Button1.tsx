import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void,
  onMouseEnter: () => void,
  onMouseLeave: () => void,
  text: string,
  className?: string,
  children?: React.ReactNode;
}

export const Button1: React.FC<ButtonProps> = ({ onClick, onMouseEnter, onMouseLeave, text, className, children }) => {

  return (
    <div className="flex w-full">

      <button onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
          className={`flex w-full items-center rounded-md text-gray-600  ${className}
          hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-200 text-ash py-2 hover:text-white`}>

        {children}{text}
      </button>

    </div>


  );
};
