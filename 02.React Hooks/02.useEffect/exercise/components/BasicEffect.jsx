import React, { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(()=>{
        console.log("Mounted for first time when render")
        alert("hii usEffect Executed");
    })
    return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect