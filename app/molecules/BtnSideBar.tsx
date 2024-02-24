import React from "react";
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

    return (
        <div className="relative top-10 w-full px-10">
            <Button1 onClick={onClick} className={`pl-12 ${className}`} text={text}>
                <Icon1 iconPath={iconPath} className="h-10 w-10 ml-10 px-3"></Icon1>
            </Button1>
        </div>
    );
}
export default BtnSideBar;
