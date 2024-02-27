'use client'
import React from "react";
import BtnHorizontalSet from "../molecules/BtnHorizontalSet";
import iconAccomadation from "../../public/assets/icon-accomotation.svg";
import iconTransportation from "../../public/assets/icon-transportation.svg"
import iconBeach from "../../public/assets/icon-beach.svg";
import iconWildlife from "../../public/assets/icon-wildlife.svg";
import iconWaterfall from "../../public/assets/icon-waterfall.svg";

const HorizontalButtonSet = () => {

    function handle() {
    };

    return (
        <div className='flex h-full ml-5 items-center'>
            <BtnHorizontalSet onClick={handle} text="Accomodation" className="" iconPath={iconAccomadation}></BtnHorizontalSet>
            <BtnHorizontalSet onClick={handle} text="Transportation" className="" iconPath={iconTransportation}></BtnHorizontalSet>
            <BtnHorizontalSet onClick={handle} text="Beaches" className="" iconPath={iconBeach}></BtnHorizontalSet>
            <BtnHorizontalSet onClick={handle} text="Wildlife" className="" iconPath={iconWildlife}></BtnHorizontalSet>
            <BtnHorizontalSet onClick={handle} text="Waterfalls" className="" iconPath={iconWaterfall}></BtnHorizontalSet>
        </div>
    );
}
export default HorizontalButtonSet;