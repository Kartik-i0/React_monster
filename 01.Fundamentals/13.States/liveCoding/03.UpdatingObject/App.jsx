import React, { useState } from 'react'

const App = () => {
  const [movie , setMovie] = useState({
    title :"Intersteller",
    ratings : 7,
  })

  const handleClick =() =>{
    //to tell react about state updates , we have to give react a brand new object

    //Long Way 
    // const copyMovie ={
    //   //This will copy all the properties into the new object , and then we can change Whatever we want in new Object.
    //   ...movie,
    //   ratings:9 
    // }
    // setMovie(copyMovie);


    //Easiest Way 
    setMovie({...movie , ratings:9});

 
  }



  return (
    <div>
      <div>
        <h1>{movie.title}</h1>
        <p><h2>{movie.ratings}</h2></p>
        <button onClick={handleClick}>Change Ratings</button>
      </div>

    </div>
  )
}

export default App