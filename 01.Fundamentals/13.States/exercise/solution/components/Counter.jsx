import React, {useState} from 'react'

const Counter = () => {
    const [count , setCount] = useState(0);

    const handleIncrement = () =>{
        setCount(count+1)
    }

    const restartCount = () =>{
        setCount(0);
    }
  

    return (
    <div> 
        <h1> Counter Value:   <i><b>{count}</b></i></h1>
        <button onClick={handleIncrement}> Increment Counter</button>
        <button onClick={restartCount}> Restart Count </button>
    </div>
  
)
}

export default Counter