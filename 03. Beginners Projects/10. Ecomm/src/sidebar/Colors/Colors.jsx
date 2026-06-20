import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Colors = () => {
  return (
    <div className='ml-18'>
      <h2 className='text-md py-2 font-semibold font-serif'>Colors</h2>
      <div className='font-serif text-md text-gray-700  '>
          <Input title={' All'}/>
          <Input/>
          <Input/>
          <Input/>

      </div>

    </div>
  )
}

export default Colors


