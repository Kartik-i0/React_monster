import React from 'react'


const App = () => {
  const name = "Kartik Jadhav";
  const multiply = (a,b) => a*b;
  const specialClass = "simple-class"

  return (
    <section>
        <h1> Practicing the Dynamic content </h1>
        <p><h3> = Basically concept is to use JS Expressiong in HTML .</h3></p>
        {/* Rendering Expression */}
        <p> 2+2 = {2+2}</p>
        {/* Rendering Variable  */}
        <p> Admin name is {name}</p>
        {/* Rendering Array */}
        <p> my Friends list is {["Omakar " , "Abhishek " , "Jayesh " , "Piyush " ,"Soham " , "swarush "]} </p>
        {/* Rendering function Value  */}
        <p> multiplication of 10*5 = {multiply(10 ,5)} </p>
        {/* Rendering class */}
        <p className={specialClass}> this is SpecialClass </p>

    </section>      
  )
}

export default App