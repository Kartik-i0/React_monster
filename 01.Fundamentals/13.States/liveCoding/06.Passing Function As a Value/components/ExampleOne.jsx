import React, { useState } from 'react'

const ExampleOne = () => {
    //use fuction to compute the initial state
    const  [count , setCount] = useState(()=>{
        //this function will only run when the the initial run .
        const intialCount = 10;
        return intialCount;
    }) 

    const increment = () =>{
         setCount((prevCount)=> prevCount+1 )
     }
  
    return (
        <div>
            <h1>ExampleOne</h1>
            <h1>Count : {count}</h1>
            <button onClick={increment}>  Increment</button>
        </div>
  )
}

export default ExampleOne