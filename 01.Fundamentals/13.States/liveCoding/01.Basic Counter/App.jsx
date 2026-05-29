// -------------------EXAMPLE 1
import React, { useState } from 'react'

const Counter = () =>{
    const [count ,setCount] = useState(0);
    const Increment = () => setCount(count+1);
    const Decrement = () => setCount(count-1);

  return( 
   <div>
      <h1>{count}</h1>
      <button onClick={Increment} ><h3>+1</h3> Count</button>
      <button onClick={Decrement}> <h3>-1</h3> count</button> 
    </div>
    )
}



const App = () => {
  
  return (
   <Counter/>
  )
}

export default App