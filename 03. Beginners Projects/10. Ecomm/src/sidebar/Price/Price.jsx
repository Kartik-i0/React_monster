import React from 'react'
import Input from '../../components/Input'

const Price = () => {
  return (
    <div className='ml-18'>
      <h2 className='text-md py-2 font-semibold font-serif'>Price</h2>
      <div className='font-serif text-md text-gray-700  '>
       <Input/>
       <Input/>
       <Input/>
       <Input/> 
      </div>

    </div>
  )
}

export default Price








// import React from 'react'
// import Input from '../../components/Input';

// const Price = ({ handleChange }) => {
//   return (
//     <>
//       <div className="ml">
//         <h2 className="sidebar-title price-title">Price</h2>

//         <label className="sidebar-label-container">
//           <input onChange={handleChange} type="radio" value="" name="test2" />
//           <span className="checkmark"></span>All
//         </label>

//         <Input
//           handleChange={handleChange}
//           value={50}
//           title="$0 - 50"
//           name="test2"
//         />

//         <Input
//           handleChange={handleChange}
//           value={100}
//           title="$50 - $100"
//           name="test2"
//         />

//         <Input
//           handleChange={handleChange}
//           value={150}
//           title="$100 - $150"
//           name="test2"
//         />

//         <Input
//           handleChange={handleChange}
//           value={200}
//           title="Over $150"
//           name="test2"
//         />
//       </div>
//     </>
//   );
// };


// export default Price
