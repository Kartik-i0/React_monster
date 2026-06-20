import React from 'react'
import Input from '../../components/Input'

const Category = ({handleChange}) => {
  const Categories =["All","Sneakers" , "Flats" , "sandals" , "Heals"]  
  return (
    <div className=' mt-5 p-2 ml-16'>
        <h2 className=' text-md py-2 font-semibold font-serif'>Category</h2>

        <div className=' font-serif text-md text-gray-700 ' >
          {Categories.map((category) => (
              <div key={category}>
                   <Input  name='Category' type='radio' value={category} title={category} handleChange={handleChange}/>
              </div>           
          ))}
        </div>

    </div>
  )
}

export default Category
