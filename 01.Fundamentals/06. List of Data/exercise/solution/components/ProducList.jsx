import React from 'react'

const ProducList = () => {
     const products = [
     { id: 1, name: "Phone", price: "$699" },
     { id: 2, name: "Laptop", price: "$1200" },
     { id: 3, name: "Headphones", price: "$199" },
   ];

  return (
    <>
        {products.map(product=>(
            <div key={product.id}>
                <h1>product : {product.name}</h1>
                <h1>price : {product.pri}</h1>
            </div>
        ))}    
    </>
  )
}

export default ProducList