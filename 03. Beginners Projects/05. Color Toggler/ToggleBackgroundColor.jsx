import React, { useState, useSyncExternalStore } from 'react'

const ToggleBackgroundColor = () => {
    const [backgroundColor ,setBgColor] = useState("white");
    const [textColor , setTextColor] = useState("black");

    const changColor = () =>{
        backgroundColor === "black" ? setBgColor("white") : setBgColor("black")    
        textColor === "white" ? setTextColor("black") : setTextColor("white")    
    }

    return (
    <div style={{backgroundColor , color: textColor }} className='h-screen flex items-center justify-around '>
        <div className='text-center'> 
            <p  className='text-7xl   font-bold font-serif '>Welcome</p>
            <button onClick={ changColor} className=' bg-blue-500 py-2  my-5 px-5 rounded-2xl text-xl font-mono '>Toggle</button>
        </div>  
    </div>
  )
}

export default ToggleBackgroundColor