import {React,useEffect,useRef} from 'react'
let el
function Input({weatherData}) {
  const input = useRef("")
  
  useEffect(()=>{
     el= input.current;
  },[])

  
  setTimeout(() => {
    el.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {  
       weatherData( el.value)
      }
  });
  
  }, 1000);
 
// console.log(el)
  return (
    <div className="font-sans flex flex-row justify-center mb-6 ">
<input type="text" 
className='text-xl font-light p-2 pl-4  shadow-xl focus:outline-none capitalize placeholder:lowercase mr-2 mt-3 mx-4 bg-slate-700  text-gray-400 rounded-sm w-190 ' ref={input}
placeholder="Enter the City" />

<button onClick={()=>{ weatherData( el.value);}} className='border w-30 hover:bg-blue300 font-bold mr-2 px-2 cursor-pointer text-gray-600 mt-3 '>SEARCH</button>

      
    </div>
  )
}

export default Input