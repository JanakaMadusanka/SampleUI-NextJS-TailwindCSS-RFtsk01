import React from "react";


interface ButtonProps {
  onClick: () => void;
  text: string,
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, className }) => {
  
  
  return (
    <div>
      <button onClick={onClick} className={`w-10 ${className}`}>
        {text}
      </button>
    </div>
  );
};


