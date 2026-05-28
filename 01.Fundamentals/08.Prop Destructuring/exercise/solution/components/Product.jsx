import React from 'react'

const Product = ({name , price}) => {
  return (
    <div>
        <h2>Product : {props.name}</h2>
        <p>Price : {props.price}</p>
    </div>
  )
}

export default Product