import React, { useState } from "react";
import { Button1 } from "../atoms/Button1";
import { StaticImageData } from "next/image";
import { Icon1 } from "../atoms/Icon1";

interface SideBarProps {
    onClick: () => void;
    text: string;
    className?: string;
    iconPath: StaticImageData;
}

export const BtnSideBar: React.FC<SideBarProps> = ({ onClick, text, className, iconPath }) => {

    //Set hover to Icon while mouse enter to button
    const [hoverIcon, setHover] = useState(false)

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };


    return (
        <div className="flex relative top-10 w-full px-10">

            <Button1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                    onClick={onClick} className={`pl-12 ${className}`} text={text}>
                                
                <Icon1 iconPath={iconPath} className={`h-10 w-10 ml-10 px-3 ${hoverIcon ? "bg-violet-700" : ""}`}></Icon1>
            </Button1>
        </div>

    );
}
export default BtnSideBar;
