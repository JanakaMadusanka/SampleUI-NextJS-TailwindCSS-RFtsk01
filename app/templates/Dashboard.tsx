import React from "react";
import Sidebar from "../organisms/Sidebar";
import HorizontalButtonSet from "../organisms/HorizontalButtonSet";
import Hedder from "../organisms/Hedder";
import ImageWindowSet from "../organisms/ImageWindowSet";

const DashBoard = () => {

    return (

        <div className="h-screen w-screen flex justify-start items-stretch
            bg-gradient-to-t from-gray-200 to-gray-20">

            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5 m-5 rounded-3xl
                bg-gradient-to-t from-purple-400 via-purple-50 to-pink-200">

                <div className="flex h-1/6 w-full mt-3" >
                    <Hedder></Hedder>

                </div>
                <div className="flex h-1/6 w-full mt-3" >
                    <HorizontalButtonSet />
                </div>
                <div className="flex h-2/6 w-full mt-3" >
                    <ImageWindowSet></ImageWindowSet>
                </div>
            </div>
        </div>

    );
}

export default DashBoard;