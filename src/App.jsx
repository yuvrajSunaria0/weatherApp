// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useRef, useState } from "react"
import mainReturn from "./api"
import Days from "./components/Days"
import Forecast from "./components/forecast"
import Input from './components/input'
import Weather from "./components/weather"

function App() {
  const [city,setCity]=useState("budapest")
  
  const[details,setDetails]=useState(" ")
  const[units,setUnits]=useState(" metric")
 
  const weather=async()=>{
   await mainReturn(city).then(setDetails)
  //  console.log(p)

    }
 useEffect(()=>{weather()},[city,units])
// const backgroundColor=details.BackgroundColor

const [bgColor,setBgColor]=useState("bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700")


const tite="Hourly"


  return (
    <div  className={`${bgColor} overflow-hidden scroll  sm:px-5 pb-8 w-screen  scrollbar-width:none `}>
    <Input  weatherData={setCity}/>
    {details && (
      <>
    <Weather weatherData={details}/>
    <Forecast title={tite} data= {details.hourly}  />
    <Days  days={details.day} Details={details.dayDetails}/>
    </>
  )}
    </div>
  )
}

export default App
