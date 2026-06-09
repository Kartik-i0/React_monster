import React, { useState } from 'react'

const Counter = () => {
  const [count , setCount] = useState(10);
  const increment = () =>setCount( prevCnt=> prevCnt+1)
  const decrement = () =>setCount( prevCnt=> prevCnt-1)
  
    return (
    
        <div className='h-screen  bg-black  flex flex-col  items-center justify-center  gap-5   '> 
            <div className='text-white pb-10'>
                <div>
                    <h1 className=' text-5xl font-mono'>{count}</h1>    
                </div>
            </div>
            <div className=' text-white flex gap-48 '>
                <div className=' w-15 h-15 text-3xl border-2 pb-2.5 border-gray-300 border-r-2 flex  items-center justify-center rounded-full hover:border-4 hover:text-6xl ' onClick={ increment }> + </div>
                <div  className=' w-15 h-15 text-3xl border-2 pb-2.5 border-gray-300 border-r-2 flex  items-center justify-center rounded-full hover:border-4 hover:text-6xl  ' onClick={ decrement }> - </div>
            </div>    
        </div>
  )
}

export default Counter