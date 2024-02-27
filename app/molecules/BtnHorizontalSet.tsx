import React, { useState } from "react";
import { Button1 } from "../atoms/Button1";
import { StaticImageData } from "next/image";
import { Icon1 } from "../atoms/Icon1";

interface BtnHorizontalSetProps {
    onClick: () => void;
    text: string;
    className?: string;
    iconPath: StaticImageData;
}

export const BtnHorizontalSet: React.FC<BtnHorizontalSetProps> = ({ onClick, text, className, iconPath }) => {

    //Set hover to Icon while mouse enter to button
    const [hoverIcon, setHover] = useState(false)

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };


    return (
        <div className="relative ml-5 top-10 w-70 ">

            <Button1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                    onClick={onClick} className={`h-12 p-16 bg-white ${className}`} text={text}>
                                
                <Icon1 iconPath={iconPath} className={`h-12 w-12 ml-2 mb-4 px-3 bg-pink-100 ${hoverIcon ? "bg-slate-500" : ""}`}></Icon1>
            </Button1>
        </div>
    );
}
export default BtnHorizontalSet;
