import React, { useState } from 'react'

const App = () => {
  const [movies , setMovies] = useState([
    { id:1 , title:"Intesteller" , ratings:9},
    { id:2 , title:"john wick" , ratings:7},
    { id:3 , title:"RRR" , ratings:8}
  ])


  const handleClick = ()=>{
      setMovies(
        movies.map( m=>(m.id === 1 ? { ...m, title: "John Wick" } : m))
      )
  }
  
  return (
    <div>
      <ol>{
          movies.map((M)=>(
            <h2>
                <li key={Math.random()}> 
                  <i>{M.title}</i> <br />
                  <i>{M.ratings}</i>
               </li>
            </h2>
          ))
        }</ol>

        <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default App