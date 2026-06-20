import React from 'react'
import Input from '../../components/Input'

const Category = ({handleChange}) => {
  const categories = [
    { value: '', label: 'All' },
    { value: 'sneakers', label: 'Sneakers' },
    { value: 'flats', label: 'Flats' },
    { value: 'sandals', label: 'Sandals' },
    { value: 'heels', label: 'Heels' },
  ]

  return (
    <div className='ml-18'>
      <h2 className='text-md py-2 font-semibold font-serif'>Price</h2>
      <div className='font-serif text-md text-gray-700  '>
        <div>
          <Input name="category" handleChange={handleChange} value={""} title={"All"}/>
        </div>
        <div>
           <Input name="category" handleChange={handleChange}  value={"sneakers"} title={"sneakers"}/>
        </div>
        <div>
           <Input name="category" handleChange={handleChange}  value={"flats"} title={"flats"}/>
        </div>
        <div>
           <Input name="category" handleChange={handleChange}  value={"sandals"} title={"Sandals"} /> 
        </div>
        <div>
           <Input name="category" handleChange={handleChange}  value={"heels"} title={"Heels"} /> 
        </div>
      </div>

    </div>
  
  )
}

export default Category
