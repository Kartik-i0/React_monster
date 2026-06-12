// import { useState } from "react";

// const Counter = () => {
//     const [count , setCount] = useState<number>(0);  

//     const increment = ()=> setCount(count+1)
//     const decrement = ()=> setCount(count-1)

//     return (
//     <>
//         <h1>Counter App</h1>
//         <p>Coubnt :{count}</p>
//         <button onClick={increment}>++</button>
//         <button onClick={decrement}>--</button>
//     </>
// )
// }
// export default Counter


// export default Counter;
// ---------------------------------
// "use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;