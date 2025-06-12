import { React, useRef, useEffect, useState } from 'react'
import Forecast from './forecast'
// {data=[]}
function Days({ days, Details }) {
    // // let day = false
    const [titleData, setTitleData] = useState("")
    const [display, setDisplay] = useState("collapse")
    const [sueData, setSueData] = useState(null)
    // useEffect(()=>{days&&(setTitleData(days[0].time))},[days])
    
    let func1 = () => {
        if (titleData != String) {
            let p = days[0].time
            setTitleData(p);
            setSueData(0);
            return;
        }
    }
    useEffect(() => { days && (func1()) }, [])

    // console.log(days, Details)
    let data1 = [1,]




    return (

        <div div className=' flex font-sans justify-center flex-col mt-5 text-white py-1 px-2 '>
            <h1 className='ml-2 mb-2 font-bold relative top-5 '>5-Day forecast</h1>
            <div className="flex justify-center items-center">
                <div className="    lol flex items-center mt-2   overflow-x-auto no-scrollbar py-6 :mx-47  ">



                    {days && (<><div onClick={() => { setTitleData(days[0].time); setSueData(0); setDisplay("") }} className='  bg-gray-900 cursor-pointer  rounded-2xl  flex flex-col items-center justify-center min-w-27 max-w-27 p-4 shadow-xl h-27 mx-2  '>
                        <p className='font-medium  relative  top-5 text-lg'>{days[0].time}</p>
                        <img src={days[0].icon} alt="weather icon" className='size-21  my-1' />
                        <p className='font-medium relative  bottom-5'>{days[0].temp}° </p>
                    </div>
                        <div onClick={() => { setTitleData(days[1].time); setSueData(1); setDisplay("") }} className='  bg-gray-900 cursor-pointer  rounded-2xl  flex flex-col items-center justify-center min-w-27 max-w-27 p-4 shadow-xl h-27 mx-2'>
                            <p className='font-medium  relative  top-5 text-lg'>{days[1].time}</p>
                            <img src={days[1].icon} alt="weather icon" className='size-21  my-1' />
                            <p className='font-medium relative  bottom-5'>{days[1].temp}° </p>
                        </div>

                        <div onClick={() => { setTitleData(days[2].time); setSueData(2); setDisplay("") }} className='  bg-gray-900 cursor-pointer  rounded-2xl  flex flex-col items-center justify-center min-w-27 max-w-27 p-4 shadow-xl h-27 mx-2'>
                            <p className='font-medium  relative  top-5 text-lg'>{days[2].time}</p>
                            <img src={days[2].icon} alt="weather icon" className='size-21  my-1' />
                            <p className='font-medium relative  bottom-5'>{days[2].temp}° </p>
                        </div>
                        <div onClick={() => { setTitleData(days[3].time); setSueData(3); setDisplay("") }} className='  bg-gray-900 cursor-pointer  rounded-2xl  flex flex-col items-center justify-center min-w-27 max-w-27 p-4 shadow-xl h-27 mx-2'>
                            <p className='font-medium  relative  top-5 text-lg'>{days[3].time}</p>
                            <img src={days[3].icon} alt="weather icon" className='size-21  my-1' />
                            <p className='font-medium relative  bottom-5'>{days[3].temp}° </p>
                        </div>
                        <div onClick={() => { setTitleData(days[4].time); setSueData(4); setDisplay("") }} className='  bg-gray-900 cursor-pointer  rounded-2xl  flex flex-col items-center justify-center min-w-27 max-w-27  p-4 shadow-xl h-27 mx-2'>
                            <p className='font-medium  relative  top-5 text-lg'>{days[4].time}</p>
                            <img src={days[4].icon} alt="weather icon" className='size-21  my-1' />
                            <p className='font-medium relative  bottom-5'>{days[4].temp}° </p>
                        </div></>)
                    }





                </div>
            </div >
            {days && (<div className=" relative bottom-3 ">
                <Forecast title={titleData} data={Details[sueData]} /></div>)}
        </div>
    )
}

export default Days