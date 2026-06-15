import { set } from 'mongoose'
import React, { useState } from 'react'

const Calculator = () => {
  const [inputVal , setInputVal] = useState('')


  const calculate = () =>{
      setInputVal(eval(inputVal));
  }


  const clear = () => setInputVal("")
  const display = (value) => setInputVal( inputVal+value) 
  
  return (
  <div className=' flex justify-around'>
    <form  className='calculator w-full m-4  sm:w-[70%] md:w-[30%] ' >
      <input type="text" className='value w-[90%]  border h-20 m-[5%]'  value={inputVal} />
      
      <div className='grid  grid-cols-3'>
            <span  className='  text-center bg-yellow-500 text-2xl text-white  p-2 m-2' onClick={()=>setInputVal("")}>
              c
            </span>
            
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={ ()=> display('/')}>/</span>
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={ ()=> display('*')}>*</span>

            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={ ()=> display('7')}>7</span>
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={ ()=> display('8')}>8</span>
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={ ()=> display('9')}>9</span>
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2'  onClick={ ()=> display('-')}>-</span>
            
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={ ()=> display('4')}>4</span>
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={ ()=> display('5')}>5</span>
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={ ()=> display('6')}>6</span>
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2'  onClick={ ()=> display('+')}>+</span>
            
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={() => display("1")}>1</span>
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={() => display("2")}>2</span>
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={() => display("3")}>3</span>
          
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={() => display("0")}>0</span>
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={() => display("00")}>00</span>
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={() => display(".")}>.</span>
            <span className='text-center bg-gray-900 text-2xl text-white  p-2 m-2' onClick={() => calculate()}>
              =
            </span>
      </div>
   </form>


  </div> 
  
  )
}

export default Calculator
