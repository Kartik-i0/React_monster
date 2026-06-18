import React, { useState } from 'react'

const Testinomials = () => {
   const [ currentIndex ,setCurrentIndex] = useState(0);
    const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

    const handleIncrement = () =>{
         setCurrentIndex((currentIndex + testimonials.length-1) % testimonials.length  )
        
    }

    const handleDecrement = () =>{
         setCurrentIndex((currentIndex+1) % testimonials.length)   
    }

    return (
    <div className='bg-black w-screen h-screen text-white flex items-center justify-around'>
         <div className='border border-gray-600 p-5  w-[85%] sm:w-[60%]  lg:[40%]'>
            <div className='text-center'>
                <p className='text-2xl  font-serif font-bold'>{testimonials[currentIndex].quote}</p>
                <p className='text-sm  font font-semibold' ><i>-- {testimonials[currentIndex].author}</i></p>
            </div>
            <div className='flex justify-between md:px-8 pt-4  '>
                <button className=' bg-blue-600 px-4 m-1 py-1 rounded-2xl '  onClick={handleDecrement}> Prev </button> 
                <button  className=' bg-blue-600 px-4 m-1  py-1 rounded-2xl' onClick={handleIncrement} > Next </button>    
            </div>
        </div>
    </div>
   
  )
}

export default Testinomials
