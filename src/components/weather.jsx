import { React, useState, useEffect } from 'react'

import { GiSunrise, GiSunset } from "react-icons/gi";
import { BiSolidDropletHalf } from "react-icons/bi";
import { WiSandstorm } from "react-icons/wi";
// import { useState } from "react";
function Weather({ weatherData: { formattedLocalTime, image, temp, temp_max, temp_min, sunrise, sunset, weatherTitle, name, feels_like, country, speed, humidity, backgroundColor, icon }, weatherData }) {
    const [I1con, seticon] = useState("assets/cloudy.gif")




    useEffect(() => {
        switch (icon) {
            case "02n": seticon("bg-[url(assets/mainNight.gif)]");

                break;
            case "03n": seticon("bg-[url(assets/mainNight.gif)]");
 
                break;
            case "04n": seticon("bg-[url(assets/mainNight.gif)]");

                break;
            case "02d": seticon("bg-[url(assets/cloudy.gif)]");
                break;
            case "03d": seticon("bg-[url(assets/cloudy.gif)]");
                break;
            case "04d": seticon("bg-[url(assets/cloudy.gif)]");
                break;
            case "01n": seticon("bg-[url(assets/clearNight.gif)]");

                break;
            case "01d":
                seticon("bg-[url(assets/mainSunnyDay.gif)]");
                break;
            case "09n": seticon("bg-[url(assets/rainMain.gif)]"); break;
            case "10n": seticon("bg-[url(assets/rainMain.gif)]"); break;
            case "11n": seticon("bg-[url(assets/rainMain.gif)]");
                break;
            case "09d": seticon("bg-[url(assets/rainMain.gif)]");
                break;
            case "10d": seticon("bg-[url(assets/rainMain.gif)]");
                break;
            case "11d": seticon("bg-[url(assets/rainMain.gif)]");
                break;
            case "13d": seticon("bg-[url(assets/snow.gif)]");
                break;

            case "13n": seticon("bg-[url(assets/snow.gif)]");
                break;
            case "50d": seticon("bg-[url(assets/foggy.gif)]");
                break;
            case "50n": seticon("bg-[url(assets/foggy.gif)]");
                break;
            // No default needed if no action
        }
    }, [icon])
    console.log(I1con)

    return (
        <>
            {weatherData && (<>
                <div className='flex justify-center font-sans items-center sm:text-4xl text-2xl text-gray-300 font-semibold mt-2 ' >
                    <h1 className='' >{name}, {country}</h1>
                </div>


                
                <div className=' flex justify-center items-center p-2 '>
                    
                    < div className={`rounded-2xl flex items-center shadow-xl  justify-center flex-col mb-5 my-4 sm:mt-7 sm:mb-13 sm:px-7 sm:p-0 sm:m-0 mx-1 p-1   w-170 h-70 sm:w-250  sm:h-130  ${I1con}  bg-no-repeat bg-cover`}>
                        <span className="bg-gradient-to-b from-slate-800 to-slate-700 flex items-center justify-center sm:mb-0 mb-3 px-3 py-1 rounded-4xl"> <p className='sm:remove-all flex items-center justify-center  text-xl sm:text-xl md:text-2xl lg:text-3xl  font-sans text-white '> {formattedLocalTime} </p></span>

                        <div className=' flex items-center justify-between '>

                            < div className=' bg-gray-700/5  backdrop-blur-[4px] rounded-2xl  text-white p-2 border-1 sm:ml-0
                    w-37 sm:h-50 h-45 sm:w-50 flex  items-center flex-col justify-center ml-1  sm:mt-15 sm:mr-2 sm: '>


                                <img className='relative top-3 w-40 h-40 pb-1' src={image} />
                                <div className=' position-relative flex flex-col align-center justify-center  mb-2 text-white relative bottom-7 font-sans ' >
                                    <p className='flex justify-center align-center pb-1 text-xl border-'>{weatherTitle}</p>

                                    <div className='flex justify-center align-center pb-1'><GiSunrise className='size-6 mr-2' /> <p>{sunrise}</p></div>

                                    <div className='flex justify-center align-center pb-3 '><GiSunset className='size-6 mr-2' /><p>{sunset}</p> </div>
                                </div>
                            </div>
                            <div className=' sm:mr-0
                   w-37 sm:h-50 h-45 sm:w-50 mr-1 bg-gray-700/10  backdrop-blur-[4px] flex
                    flex-col justify-center items-center rounded-2xl  text-white border-[1px] sm:mt-15 sm:ml-20 ml-2 font-sans '>
                                <p className='sm:text-8xl text-6xl  rounded-3xl mt-1 pt-1 bg-gradient-to-b from-slate-800 to-slate-700 p-2.5 ' >{temp}°</p>
                                <p className='mt-2'>Max {temp_max}° | Min {temp_min}°</p>
                                <p className=' mb-3 '> Real feel : {feels_like}°</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex justify-center items-center'>

                    <div className='flex  items-center justify-evenly  sm:flex-row flex-wrap text-white  mb-8  bg-gradient-to-b from-slate-600 to-slate-500  rounded-2xl  mx-1  shadow-xl font-sans p-2 w-80'>


                        <div className='flex items-center   mr-2'> <BiSolidDropletHalf className='size-6  mr-1 flex items-center  ' /> Humidity {humidity}% </div>
                        <div className='flex items-center  '> <WiSandstorm className='size-6 flex items-center  mr-2  ' />Wind {speed} KpH </div>


                    </div>
                </div>
            </>)} </>
    )
}

export default Weather