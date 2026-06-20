import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Colors = ({handleChange}) => {
  return (
    <div className='ml-18'>
      <h2 className='text-md py-2 font-semibold font-serif'>Color</h2>
      <div className='font-serif text-md text-gray-700'>
        <div className='flex items-center gap-3'>
          <span className='w-3 h-3 rounded-full bg-gray-500' />
          <Input name="color" handleChange={handleChange} value={""} title={"All"}/>
        </div>
        <div className='flex items-center gap-3'>
          <span className='w-3 h-3 rounded-full bg-black' />
          <Input name="color" handleChange={handleChange} value={"black"} title={"Black"}/>
        </div>
        <div className='flex items-center gap-3'>
          <span className='w-3 h-3 rounded-full bg-blue-600' />
          <Input name="color" handleChange={handleChange} value={"blue"} title={"Blue"}/>
        </div>
        <div className='flex items-center gap-3'>
          <span className='w-3 h-3 rounded-full bg-red-600' />
          <Input name="color" handleChange={handleChange} value={"red"} title={"Red"} />
        </div>
        <div className='flex items-center gap-3'>
          <span className='w-3 h-3 rounded-full bg-green-600' />
          <Input name="color" handleChange={handleChange} value={"green"} title={"Green"} />
        </div>
        <div className='flex items-center gap-3'>
          <span className='w-3 h-3 rounded-full border border-gray-300 bg-white' />
          <Input name="color" handleChange={handleChange} value={"white"} title={"White"} />
        </div>
      </div>

    </div>
  )
}

export default Colors


