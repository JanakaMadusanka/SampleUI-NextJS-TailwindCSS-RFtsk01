import React from "react";
import { StaticImageData } from "next/image";


interface imageWindowProps {
  imagePath: StaticImageData,
  className?: string,
}

export const ImageWindow: React.FC<imageWindowProps> = ({ imagePath, className}) => {

  return (
    <div className={`h-full ${className}`}>
      <img className="h-full rounded-2xl" src={imagePath.src} alt="" />
    </div>
  );
}; 
