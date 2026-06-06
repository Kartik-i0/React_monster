import e from 'cors';
import React, { useEffect, useState } from 'react'

const ExampleThree = () => {

    const [name , setName] = useState(() =>{
        const savedName  = localStorage.getItem("name");

        return savedName ? JSON.parse(savedName) : "";
    })

    useEffect(()=>{
        localStorage.setItem('name' ,JSON.stringify(name))
    } ,[name])

    const handleChange = (event) =>{
        setName(event.target.value);
    }


    const handleClear = () =>{
        setName("")
    }
    return (
    <div>
            <h1>ExampleThree</h1>
            <h2> Your name : {name}</h2>
            <input type="text" value={name} onChange={handleChange}/>
            <button onClick={handleClear}> Clear Name </button>
    </div>
  )
}

export default ExampleThree