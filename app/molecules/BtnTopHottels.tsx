import React, { useState } from "react";
import { Button1 } from "../atoms/Button1";
import { StaticImageData } from "next/image";
import { ImageWindow } from "../atoms/imageWindow";

interface BtnTopHottelsProps {
    
    imagePath: StaticImageData;
    hotelName?: string;
    countryName?: string;
    ratingNo?:string;
    icon1?: string;
    iconRating: StaticImageData;
}

export const BtnTopHottels: React.FC<BtnTopHottelsProps> = ({ imagePath, hotelName, countryName, icon1,iconRating, ratingNo }) => {

    return (
        <div className="relative pt-5">
            <Button1 btn1Class="relative h-16 bg-white">
                <div className="w-full">
                    <div className="absolute left-0 top-0 p-1 h-full w-1/4">
                        <ImageWindow className="w-16" imagePath={imagePath}></ImageWindow>
                    </div>
                    <div className="flex h-full w-ful ml-5 justify-between px-3">
                        <div className="ml-20 ">
                            <label className="text-xs font-bold" htmlFor="">{hotelName} </label>
                            <br />
                            <label className="text-xs" htmlFor="">{countryName}</label>
                        </div>
                        <div className="">
                            <label className="text-xs font-bold text-left" htmlFor=""><img className="h-4" src={icon1.src} alt="" /></label>
                            <br />
                            <label className="flex text-xs text-left" htmlFor=""><span><img className="h-4 mr-2" src={iconRating.src} alt="" /></span> {ratingNo}</label>
                        </div>
                    </div>
                </div>



            </Button1>
        </div>
    );
}
export default BtnTopHottels;
