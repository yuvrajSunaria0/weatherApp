import React, { useEffect, useState, useRef } from 'react'
// is https://openweathermap.org/img/wn/10d@2x.png

<link rel="stylesheet" href="./hlo.css" />
function Forecast({ title, data }) {
    let k = ""
    let data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const [lol, setLol] = useState(" ")
   

    return (<>
        {data && ( < div className='flex font-sans justify-center flex-col mt-5 text-white p-1'>
            <h1 className='ml-2 mb-2 font-bold '>{title}</h1>

            <div className=" mr-0 flex items-center mt-3 justify-between overflow-x-auto no-scrollbar  rounded-4xl  bg-gradient-to-b from-slate-600 to-slate-500   p-2 shadow-xl  xl:mx-40  xl:w-3.5 ">
                {data.map((d, index) => (
                    <>
                        {/* */}
                        <div key={index} className=' flex flex-col items-center justify-center min-w-25 h-25'>
                            <p className='font-light text-sm relative  top-5'>

                                {d.time}

                            </p>
                            <img src=
                                {d.icon}
                                alt="weather icon" className='size-21  my-1' />
                            <p className='font-medium relative  bottom-5'>

                                {d.temp}°




                            </p>
                        </div>
                       
                    </>
                ))}
            </div>
</div>)}</>
    )
}

export default Forecast