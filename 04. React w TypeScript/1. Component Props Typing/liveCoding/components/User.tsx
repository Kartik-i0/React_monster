//---------------------------------------------------------------
// 1. Passing Types 

import type { ReactNode } from "react"

  
// const User = (props:{name : string; age : number; isStudent:boolean}) => {
//   return  (
//     <>
//       <h2>{props.name}</h2>
//       <p>{props.age}</p>
//       <p>{props.isStudent} hii</p>
//     </>
//   )
// }
// export default User


// -------------------------------------
// 2. Destructuring Props Values.
// const User = ({name , age ,  isStudent}:{name:string , age: number , isStudent:boolean}) => {
//   return (
//     <main>
//       <h2>{name}</h2>
//       <h2>{age}</h2>
//       <h2>{isStudent}</h2>
//     </main> 
//   )
// }
// export default User


// -------------------------------------
// 3. Creating Custom Types (type alias & Interfaces)

// type UserShape ={
//  name:string;
//  age:number;
//  isStudent:boolean;
// }

// interface UserShape {
//   name:string;
//   age:number;
//   isStudent: boolean,
// }
// const User = ({name , age , isStudent}:UserShape) => {
//   return (
//   <main>
//        <h2>{name}</h2>
//        <h2>{age}</h2>
//        <h2>{isStudent}</h2>
  
//   </main>
//   )
// }
// export default User



// -------------------------------------
// 4. Children

type shape = {
 children :ReactNode; 
}



const User = ({children}:shape) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default User