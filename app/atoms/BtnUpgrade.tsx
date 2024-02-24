import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  text: string,
  className?: string,
}

export const BtnUpgrade: React.FC<ButtonProps> = ({ onClick, text, className}) => {

  return (
    <div className="">
      <button onClick={onClick} className={`flex p-6 h-8 items-center rounded-3xl  ${className}
        bg-gradient-to-r from-violet-700 to-pink-200 text-ash py-2 text-white`}>
      {text}
      </button>
    </div>
  );
};
