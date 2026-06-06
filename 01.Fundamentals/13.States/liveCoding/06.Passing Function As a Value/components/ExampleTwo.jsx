import { set } from 'mongoose'
import React, { useState } from 'react'

const ExampleTwo = () => {
    const [randomNo , setRandomNo] = useState( ()=> Math.floor(Math.random()*100))

    const generateNewRandomNO = ()=>{
        setRandomNo(Math.floor(Math.random()*100));
    }
    return (
    <div>
        <h1>ExampleTwo <br /> Random Number = {randomNo} </h1>
        <button onClick={generateNewRandomNO}> Generate a new Random Number </button>

    </div>
  )
}

export default ExampleTwo