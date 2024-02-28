import React from "react";
import { StaticImageData } from "next/image";
import iconCalendar from "../../public/assets/icon-calendar.png"

interface imageWindowProps {
  imagePath: string,
  className?: string,
  text1?: string
  text2?: string
}

export const ImageWindow: React.FC<imageWindowProps> = ({ imagePath, className, text1, text2 }) => {

  return (
    <div className={`w-full h-full ${className}`}>
      <img className="w-full h-full rounded-2xl" src={imagePath} alt="" />
      <label className="absolute bottom-10 left-0 text-white px-2 ml-2 py-1 text-xs font-bold" htmlFor="topic">{text1}</label>
      <img className="absolute bottom-5 left-0 px-2 pb-2 w-7 ml-2" src={iconCalendar.src} alt="" />
      <label className="absolute bottom-5 left-5 text-white px-3 py-1 text-xs" htmlFor="topic">{text2}</label>
    </div>
  );
}; 
