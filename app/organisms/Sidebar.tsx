'use client'
import React from "react";
import { Button } from "../atoms/Button";

const Sidebar = () => {

    function handle() {
    };

    return (
        <div className="absolute  top-8 left-8">
            <Button onClick={handle} className={" w-32 h-9 bg-pink-600 text-white rounded-full"} text={"Login"} />
            <Button onClick={handle} className={" w-32 h-9 bg-pink-600 text-white rounded-full"} text={"Exit"} />
        </div>
    );
}
export default Sidebar;