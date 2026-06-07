import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [counter , setCounter] = useState(0);
    
    useEffect(()=>{
        document.title = `Increment /Decrement ${counter}`
    },[counter])

    return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>++</button>
        <button onClick={()=>setCounter(counter-1)}>--</button>

    </div>
  )
}

export default CounterEffect