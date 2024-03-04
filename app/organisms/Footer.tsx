'use client'

import React from 'react'
import imgHotelParadice from "../../public/assets/img-hotel-paradice.jpg"
import imgHotelDives from "../../public/assets/img-hotel-dives.jpg"
import iconRating from "../../public/assets/icon-rating.png"
import icon1 from "../../public/assets/icon-icon1.png"
import { Topic } from '../atoms/Topic';
import WeekPicker from '../molecules/Calender';
import BtnTopHottels from '../molecules/BtnTopHottels';

const Footer = () => {
    return (
        <div className="mx-8 w-full grid grid-cols-3 gap-12">

            <div className="justify-center items-center h-full">
                <div className='flex pt-3'>
                    <div>
                        <Topic text1="Top" text2="Hotels" classTxt1="" classTxt2=""></Topic>
                    </div>
                    <button className="ml-48 text-gray-800  text-xs text-center inline-flex items-center">Nearby
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                </div>
                <div>
              
                    <BtnTopHottels hotelName="Dives hotel" countryName='Mal dives' iconRating={iconRating} icon1={icon1} ratingNo='8.5' imagePath={imgHotelDives}></BtnTopHottels>
                    <BtnTopHottels hotelName="Paradise" countryName='Mal dives' iconRating={iconRating} icon1={icon1} ratingNo='9' imagePath={imgHotelParadice}></BtnTopHottels>
                </div>
            </div>
            <div className="justify-center items-center h-full">
                <div className='flex pt-3'>
                    <div>
                        <Topic text1="Available" text2="Dates" classTxt1="" classTxt2=""></Topic>
                    </div>
                    <button className="ml-36 text-gray-800  text-xs text-center inline-flex items-center">jan 2021
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                </div>
                <div className='bg-white rounded-2xl'>
                    <WeekPicker></WeekPicker>
                </div>

            </div>
        </div>
    );
}


export default Footer


