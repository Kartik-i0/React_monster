import React from 'react'
const productInfo ={
    name : "Laptop",
    price : "$1200",
    availability : "In Stock"  
} 

const ProductInfo = () => {
  return (
    <div>
        <br /><br />
        <h3><b> <i>Product</i> : {productInfo.name}</b></h3>
        <p>PRICE : {productInfo.price} <br />
        AvaiLability : {productInfo.availability}</p>
    </div>
  )
}

export default ProductInfo