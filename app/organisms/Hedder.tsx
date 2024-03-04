'use client'
import React from "react";
import { Topic } from "../atoms/Topic";
import { Button1 } from "../atoms/Button1";
import { Icon1 } from "../atoms/Icon1";
import iconNotification from "../../public/assets/icon-notification.png"
import iconMessage from "../../public/assets/icon-message.png"
import iconSearch from "../../public/assets/icons-search.png"
import { Avatar } from "@mui/material";

const Hedder = () => {
    // <div className='mt-6 ml-6 flex flex-col md:flex-row items-center relative'>
    return (
        <div className='flex relative h-full items-center'>
            <div className="flex container row">
                <div className="col-span-6 ml-8">
                    <label className="text-xl font-bold" htmlFor="">Hello, </label>
                    <label htmlFor="">Mrs Shelby</label>
                    <br />
                    <label className="text-xs" htmlFor="">Wellcome back!</label>
                </div>
                <div className="flex col-span-4 items-center">
                    <div className="relative ml-20">
                        <input type="search" className="relative h-9 w-40 rounded-xl pl-3 pr-10 z-10" placeholder="search outline-none" />
                        <Icon1 iconPath={iconSearch} className="absolute inset-y-0 right-0 h-full w-10 px-3 bg-white z-20" ></Icon1>
                    </div>

                    <Icon1 iconPath={iconNotification} className="h-9 w-10 ml-10 px-3 bg-white" ></Icon1>

                    {/* <button className='bg-white flex justify-center items-center rounded-2xl p-1 mr-0 md:mr-9 mb-3 md:mb-0' >
                        <Favicon favicon={BellIcon.src} className="w-8 h-8 justify-center items-center" />
                    </button> */}
                    <Icon1 iconPath={iconMessage} className="h-9 w-10 ml-10 px-3 bg-white"></Icon1>


                </div>
                <div className="relative col-span-2 items-center pl-10">
                    <a href="">
                        <Avatar className=""></Avatar>
                    </a>
                </div>


            </div>

        </div>
    );
}
export default Hedder;