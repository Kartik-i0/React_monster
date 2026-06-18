import React, { useState } from 'react'

const Accordion = ({title ,content}) => {
    const [isActive , setIsActive] = useState(false);
    return (
    <div className='bg-gray-700 m-2 w-[80%] '>
        <div className=' text-white p-2'>
            <div onClick={()=> setIsActive(!isActive )} className=' flex items-center justify-between mx-6 min-h-10 ' > 
                <div className=' font-bold font-serif'> {title} </div>
                <div className=' text-3xl pb-1.5'> {isActive? "+" :" -"} </div>   
            </div>
            <div className='mx-6 font-light' >
                {isActive && <p>{content}</p>}
            </div>
        </div>
    </div>
    
  )
}

export default Accordion
