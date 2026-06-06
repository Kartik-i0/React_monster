import { append } from 'express/lib/response';
import React, { useState } from 'react'

const ShoppingList = () => {
    const [ShopList , setShopList] = useState([])
    const [name , setName] = useState("");
    const [quantity , setQuantity] = useState("");

    const handleSubmit = (e) =>{
        

        e.preventDefault();
        if(!name || !quantity)
            return


        const newItem ={
            name ,
            quantity : parseInt(quantity)
        }
        
        setShopList((prev)=>[...prev ,newItem])
        setName("");
        setQuantity("")
        
        
    }



    return (
    <div>
        <h1>Shopping List </h1>
        <form onSubmit={handleSubmit} >
            <input 
            type="text" 
            placeholder='Item name'
            value={name}
            onChange={(e)=>{
                setName(e.target.value);
            }}/>

            <input 
            type='number'
            value={quantity}
            placeholder='Item quantity'
            onChange={(e)=>{
                setQuantity(e.target.value);
            }}
            />

            <button onChange={handleSubmit}> Add </button>
        </form>

        <section>
            <h2>List</h2>
            <ol>{
                    ShopList.map((item,index)=>(
                        <li key={index}> Item :{item.name} Quantity :{item.quantity} </li>
                    ))
                } </ol>
        </section>

     </div>
  )
}

export default ShoppingList