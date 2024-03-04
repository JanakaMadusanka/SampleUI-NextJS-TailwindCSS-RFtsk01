import React from "react";
import Sidebar from "../organisms/Sidebar";
import HorizontalButtonSet from "../organisms/HorizontalButtonSet";
import Hedder from "../organisms/Hedder";
import ImageWindowSet from "../organisms/ImageWindowSet";
import Footer from "../organisms/Footer";
import MyAccount from "../organisms/MyAccount";


const DashBoard = () => {

    return (

        <div className="h-screen w-screen flex justify-start items-stretch
            bg-gradient-to-t from-gray-200 to-gray-20">

            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5 m-5 rounded-3xl
                bg-gradient-to-t from-purple-400 via-purple-50 to-pink-200">

                <div className="flex h-20 w-full mt-8 ">
                    <Hedder></Hedder>

                </div>
                <div className="flex h-20 w-full mt-2 " >
                    <HorizontalButtonSet />
                </div>
                <div className="flex h-1/3 w-full mt-2 " >
                    <ImageWindowSet></ImageWindowSet>
                </div>
                <div className="flex h-1/3 w-full mt-2 " >
                        <Footer></Footer>
                </div>
            </div>
            <div className="w-1/5 m-5 rounded-3xl
                bg-gradient-to-t from-purple-200 via-purple-50 to-pink-100">
                <MyAccount></MyAccount>
            </div>
        </div>

    );
}

export default DashBoard;