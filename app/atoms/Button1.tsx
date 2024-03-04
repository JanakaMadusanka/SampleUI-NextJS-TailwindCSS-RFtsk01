import React, { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  text?: string,
  btn1Class?: string,
  children?: React.ReactNode;
}

export const Button1: React.FC<ButtonProps> = ({ onClick, onMouseEnter, onMouseLeave, text, btn1Class, children }) => {

  return (
    <div className="flex w-full">

      <button onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
          className={`flex w-full items-center rounded-xl text-gray-600  ${btn1Class}
          hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-200 text-ash py-2 hover:text-white`}>

        {children}{text}
      </button>

    </div>


  );
};
