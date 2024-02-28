import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { ImageWindow } from "../atoms/imageWindow";

interface DetailedImageWindowProps {
    text1?: string;
    text2?:string;
    className?: string;
    imagePath: string;
}

export const DetailedImageWindow: React.FC<DetailedImageWindowProps> = ({text1, text2, className, imagePath }) => {
    return (
        <div className="relative ml-8 py-5">
            <ImageWindow className={`w-40 ${className}`} text1={text1} text2={text2} imagePath={imagePath}>                     
            </ImageWindow>
        </div>
    );
}
export default DetailedImageWindow;
