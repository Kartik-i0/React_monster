// We setup useEffect hook to run some code WHEN
//  👉 Component renders for the (First Time)
//  👉  & WHENEVER it re-renders
//  👉  & some data in our component changed.

import React, { useEffect, useState } from 'react'

// 1. Without Empty Array
// const App = () => {
//   const [value , setValue] = useState(0);
//   useEffect(()=>{
//     console.log("call useEffect.");
//     document.title = `Increment (${value})`;
//   })
//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={()=>{setValue(value+1)}}>Click Me</button>
//     </div>
//   )
// }


// 2. UseEffect - Conditional 
// You cannot wrap hook with the Conditional Statement.
// If you want logic you'll have to put it inside your hook.
// const App = () => {
//   const [value , setValue] = useState(0);

//   useEffect(()=>{
//     if(value>0)
//       document.title = `Increment ${value}`
//   })

//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={()=>setValue(value+1)}>Click Me</button>
//     </div>
//   )
// }


// 3. UseEffect - DependencyList
// empty array means (it will ONLY run on initial render)
// passing value to array means (it will re-render when that value changed)
// const App = () => {
//   const [value , setValue]= useState(0);
//   useEffect(()=>{
//     console.log("useEffect Called")
//     if(value>0)
//       document.title = `Increment ${value}`
//   },[value])

//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={()=> setValue(value+1)}>Cllick Me</button>
//       <button onClick={()=> setValue(value-1)}>Cllick Me</button>
//     </div>
//   )
// }

// The cleanup can prevent memory leaks and remove unwanted things. Some use-cases for this are:

// Clean up subscriptions
// Clean up modals
// Remove event listeners
// Clear timeouts
// const App = () => {
//   const [size ,setSize] = useState(window.innerWidth);
//   console.log(size);

//   const checksize = ()=> setSize(window.innerWidth);

//   useEffect(()=>{
//     window.addEventListener("resize" ,checksize);
//     return() =>{
//         // Before we add render our component again
//         // this cleanup function will cleanup the component first.
//         console.log("cleanUp")
//         window.removeEventListener("resize",checksize)
//       } ;   
//   });
  
//   return (
//     <div>
//       <h2>window</h2>
//       <h2>{size}px</h2>
//     </div>
//   )
// }


// Fetching Data from 3rd party
const App = () => {
  const [data , setdata] = useState([]);
  
  useEffect(()=>{
     const getData = async() =>{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      if(data && data.length) setdata(data);
    }

    getData();
    } , []);

  return (
    <div>
        <ul>
          {data.map((item)=>(
            <li key={Math.random()*100}>
              {item.title} 
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App