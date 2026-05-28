// I'm working on the practice of functional component
// BUT you're totally free to work with class based components as well 🥂

// // -----Example1
// import React from 'react'

// const ValidPassword = () => {
//   return(
//     <>
//       <h1>Valid Password</h1>
//     </>
//   )
// }

// const InvalidPassword = () => {
//   return(
//     <>
//       <h1>Wrong Password</h1>
//     </>
//   )
// }

// const Password = ({isValid}) => {
//   if(isValid){
//     return <ValidPassword/>
//   }
//   return <InvalidPassword/>
// } 

// const App = () => {
//   return (
//     <div>
//       <Password isValid={true} />
//     </div>
//   )
// }


// --------------------------------Example 2
// const  Cart = () => {
//   const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"];

//   return (
//     <>
//       <h1>Cart 🛒</h1>
//       {items.length > 0 && <h2>You have {items.length} items in your Cart.</h2>}

//       <ul>
//         <h4> 👇Products </h4>
//         {items.map((item) => (
//           <li key={Math.random()}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// const App = () => <Cart />;



//----------------------------------Example3
// condition ? true : false
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) =>
  isValid ? <ValidPassword /> : <InvalidPassword />;

const App = () => {
  return (
    <section>
      <Password isValid={true} />
    </section>
  );
};



export default App
