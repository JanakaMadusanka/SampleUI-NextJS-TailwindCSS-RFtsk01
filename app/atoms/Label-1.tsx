import React, { ReactNode } from "react";

interface LabelProps {
  text1: string,
  text2: string,
  className?: string,
}

export const Button1: React.FC<LabelProps> = ({text1,text2, className}) => {

  return (
    <div className="flex w-full">
      <label htmlFor="">{text1}{text2}</label>
    </div>
  );
};
