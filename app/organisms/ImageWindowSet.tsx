'use client'
import React from "react";
import imgForest from "../../public/assets/img-forest.jpg"
import imgTropical from "../../public/assets/img-tropical-paradise.jpg"
import imgMountain from "../../public/assets/img-mountain.jpg"
import imgLakeView from "../../public/assets/img-lake-view.jpg"
import imgDesert from "../../public/assets/img-desert-expedition.jpg"
import imgEcoTourism from "../../public/assets/img-eco-tourism.jpg"
import DetailedImageWindow from "../molecules/DetailedImageWindow";


const ImageWindowSet = () => {

    return (
        <div className='flex max-h-50'>
            <DetailedImageWindow className="" text1="Forest trip" text2="8-9 days" imagePath={imgForest.src}></DetailedImageWindow>
            <DetailedImageWindow className="" text1="Tropical paradise" text2="5-7 days" imagePath={imgTropical.src}></DetailedImageWindow>
            <DetailedImageWindow className="" text1="Mountain retreat" text2="2-3 days" imagePath={imgMountain.src}></DetailedImageWindow>
            <DetailedImageWindow className="" text1="Desert Expedition" text2="1-2 days" imagePath={imgDesert.src}></DetailedImageWindow>
            <DetailedImageWindow className="" text1="Lake view" text2="4-5 days" imagePath={imgLakeView.src}></DetailedImageWindow>
            <DetailedImageWindow className="" text1="Eco tourism adventure" text2="8-12 days" imagePath={imgEcoTourism.src}></DetailedImageWindow>
        </div>
    );
}
export default ImageWindowSet;