'use client'
import React from "react";
import BtnSideBar from "../molecules/BtnSideBar";
import iconDest from "../../public/assets/icon-destinations.png";
import iconMsg from "../../public/assets/icon-message.png";
import iconNotific from "../../public/assets/icon-notification.png";
import iconSaved from "../../public/assets/icon-saved-places.svg";
import iconSchedule from "../../public/assets/icon-schedule.png";
import iconAccount from "../../public/assets/icon-account.png";
import iconSetting from "../../public/assets/icon-settings.svg";
import iconLogout from "../../public/assets/icon-logout.png";
import { BtnUpgrade } from "../atoms/BtnUpgrade";
import iconDevelop from "../../public/assets/icon-development.png";


const Sidebar = () => {

    function handle() {
    };

    return (
        <div className='h-full ml-5 flex flex-col items-center'>
            <label className="mt-10 mb-15 from-neutral-800">Tours.com</label>
            <BtnSideBar onClick={handle} text="Destinations" className="" iconPath={iconDest}></BtnSideBar>
            <BtnSideBar onClick={handle} text="Mesages" className="" iconPath={iconMsg}></BtnSideBar>
            <BtnSideBar onClick={handle} text="Notifications" className="" iconPath={iconNotific}></BtnSideBar>
            <BtnSideBar onClick={handle} text="Saved Places" className="" iconPath={iconSaved}></BtnSideBar>
            <BtnSideBar onClick={handle} text="Schedule" className="" iconPath={iconSchedule}></BtnSideBar>
            <BtnSideBar onClick={handle} text="Account" className="" iconPath={iconAccount}></BtnSideBar>
            <BtnSideBar onClick={handle} text="Settings" className="" iconPath={iconSetting}></BtnSideBar>
            <BtnSideBar onClick={handle} text="Logout" className="" iconPath={iconLogout}></BtnSideBar>
            <div className="absolute bottom-20 flex flex-col items-center ">
                <img className="w-15" src={iconDevelop.src}/>
                <label className="">Use our premium</label>
                <label className="mb-4">features now!</label>
                <BtnUpgrade onClick={handle} text="Upgrade Now" className=""></BtnUpgrade>
            </div>
        </div>
    );
}
export default Sidebar;