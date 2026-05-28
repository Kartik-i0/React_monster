import React from 'react'

// Example 1
// const App = () => {
//   const numbers = [1, 2, 3, 4, 5, 6]; 

//   return (
//     <div>
//       Print list of  array element
//         <ul >
//           {numbers.map((number)=>(
//               <li key={Math.ceil(Math.random()*10)}>{number}</li>
//           ))}
//         </ul>
//     </div>
//   )
// }


//  Example 2
// const App = () => {
//   const usersInfo = [
//     {
//       username: "HuXn",
//       email: "test@gmail.com",
//       location: "USA",
//     },
//     {
//       username: "John",
//       email: "jd@gmail.com",
//       location: "Arab",
//     },
//     {
//       username: "Alex",
//       email: "alexmersion@gmail.com",
//       location: "India",
//     },
//   ];

//   return(
//     <>
//       <h2>Print the List of users in the array : </h2>
      
//         {usersInfo.map(user =>(
//           <ul key={user.email}>
//             <li>{user.username}</li>
//             <li>{user.email}</li>
//             <li>{user.location}</li>
//           </ul>
//         ))}
//     </>
//   )
// }


// Example3
import "./shopping.css"
const App = () =>{
  const items = ["wireLess Earbuds" , "Power Bank" ,"New SSD" ,"Hoddie"]  ;

  return(
    <>
      <Shopping items={items}/>
    </>
  )
}

const Shopping = (prop) =>{
  
  return(
    <>
       <h2>List Of items received thrugh Prop </h2>
        <ol >
          {prop.items.map((item)=>(
            <li key={Math.random()*10}>{item}</li>
          ))}
       </ol>
    </>
  )
}

export default App