import React from "react";
import Sidebar from "../organisms/Sidebar";

const DashBoard = () => {

    return (

        <div className="h-screen w-screen flex justify-start items-stretch
            bg-gradient-to-t from-gray-200 to-gray-20">

            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="flex-1 m-5 rounded-3xl
                bg-gradient-to-t from-purple-400 via-purple-50 to-pink-200">
            </div>
        </div>

    );
}

export default DashBoard;