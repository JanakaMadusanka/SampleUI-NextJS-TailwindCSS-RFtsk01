import React from "react";
import { StaticImageData } from "next/image";

interface iconProps {
  iconPath: StaticImageData,
  className: String
}

export const Icon1: React.FC<iconProps> = ({ iconPath, className }) => {

  //export default function Icon1(){  
  return (
    <div className={`flex items-center absolute left-0 rounded-md ${className} hover:bg-violet-700`}>
      <img className="w-4 opacity-100" src={iconPath.src} alt="" />
    </div>
  );
}; 
