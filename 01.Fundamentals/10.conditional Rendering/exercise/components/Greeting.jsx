import React from 'react'

const Greeting = ({morning ,afternoon ,evenning}) => {
  return morning ? <h1>Good Morning</h1> :  (afternoon ? <h1>Good Afternoon </h1> : <h1>Good Evening </h1>)
}

export default Greeting