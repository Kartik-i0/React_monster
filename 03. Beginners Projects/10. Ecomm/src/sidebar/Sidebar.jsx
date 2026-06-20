import React from 'react'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import price from './Price/Price'
import Price from './Price/Price'


const Sidebar = ({handleChange}) => {
  
  return (
    <div className=' w-[18%] fixed  bg-gray-100 h-screen border-r-2 border-gray-300'>
      <section>
        <div className=' flex justify-center  mt-5 pb-6 border-b-2 border-gray-200 ' >
            <h1 className='text-xl font-extrabold font-serif' >logo</h1>
        </div>

        <Category handleChange={handleChange} />
        <Colors handleChange={handleChange}/>
        <Price handleChange={handleChange}/>

      
      </section>
    </div>
  )
}

export default Sidebar
