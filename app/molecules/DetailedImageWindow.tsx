import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { ImageWindow } from "../atoms/imageWindow";
import iconCalendar from "../../public/assets/icon-calendar.png"

interface DetailedImageWindowProps {
    text1?: string;
    text2?: string;
    className?: string;
    imagePath: StaticImageData;
}

export const DetailedImageWindow: React.FC<DetailedImageWindowProps> = ({ text1, text2, className, imagePath }) => {
    return (
        <div className="relative ml-8 py-3">
            <ImageWindow className={`w-40 ${className}`} imagePath={imagePath}></ImageWindow>
            <label className="absolute bottom-10 left-0 text-white px-2 ml-2 py-1 text-xs font-bold" htmlFor="topic">{text1}</label>
            <img className="absolute bottom-5 left-0 px-2 pb-2 w-7 ml-2" src={iconCalendar.src} alt="" />
            <label className="absolute bottom-5 left-5 text-white px-3 py-1 text-xs" htmlFor="topic">{text2}</label>           
        </div>
    );
}
export default DetailedImageWindow;
