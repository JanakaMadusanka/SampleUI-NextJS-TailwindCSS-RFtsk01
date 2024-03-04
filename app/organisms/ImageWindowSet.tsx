'use client'
import React from "react";
import imgForest from "../../public/assets/img-forest.jpg"
import imgTropical from "../../public/assets/img-tropical-paradise.jpg"
import imgMountain from "../../public/assets/img-mountain.jpg"
import imgLakeView from "../../public/assets/img-lake-view.jpg"
import imgDesert from "../../public/assets/img-desert-expedition.jpg"
import imgEcoTourism from "../../public/assets/img-eco-tourism.jpg"
import DetailedImageWindow from "../molecules/DetailedImageWindow";
import { Topic } from "../atoms/Topic";


const ImageWindowSet = () => {

    return (
        <div>
            <div className="px-4">
                <Topic text1="Best" text2="Experiences" classTxt1="" classTxt2=""></Topic>
            </div>

            <div className='flex'>
                <DetailedImageWindow className="" text1="Forest trip" text2="8-9 days" imagePath={imgForest}></DetailedImageWindow>
                <DetailedImageWindow className="" text1="Tropical paradise" text2="5-7 days" imagePath={imgTropical}></DetailedImageWindow>
                <DetailedImageWindow className="" text1="Mountain retreat" text2="2-3 days" imagePath={imgMountain}></DetailedImageWindow>
                <DetailedImageWindow className="" text1="Desert Expedition" text2="1-2 days" imagePath={imgDesert}></DetailedImageWindow>
                <DetailedImageWindow className="" text1="Lake view" text2="4-5 days" imagePath={imgLakeView}></DetailedImageWindow>
                <DetailedImageWindow className="" text1="Eco tourism adventure" text2="8-12 days" imagePath={imgEcoTourism}></DetailedImageWindow>
            </div>

        </div>

    );
}
export default ImageWindowSet;