import React, { useReducer, useState } from 'react'
import {initialState , reducer }  from "./Counter"

const App = () => {
  const [state , dispatch] =useReducer(reducer , initialState);
  const [inputval , setInputval] = useState(0);
  const handleInputVal = (e) =>{
    setInputval(e.target.value)
  }

  const handleIncrement =()=>{
    dispatch({type:"increment"});
  }

  const handleDecrement =()=>{
    dispatch({type:"decrement"});
  }

  const handleAddByValue =()=>{
    dispatch({type:"addByValue" , payload:Number(inputval)});
    setInputval(0);
  }

  const handleSubByValue =()=>{
    dispatch({type:"subByValue" , payload:Number(inputval)});
    setInputval(0);
  }
  return (
    <div>
      <h1>{state.count}</h1>   
      <button onClick={handleIncrement}>Increment</button>   
      <button onClick={handleDecrement}>Decrement</button>   
      <input
       type="number"
       value={inputval} 
       placeholder="Enter input value here"
       onChange={handleInputVal}
      />
      <button onClick={handleAddByValue}>Add by Value</button>   
      <button onClick={handleSubByValue}>sub by Value</button>   
    </div>
  )
}

export default App