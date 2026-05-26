import React from 'react'

const Greeting = () => {
    const name = "Kartik Jadhav"
    const date = new Date();
    return (
    <div>
        <h1>Welcome {name}</h1>
        <p>Todays Date : {date.getDate()} Month : {date.getMonth()}  year : {date.getFullYear()}</p>
    </div>
  )
}

export default Greeting