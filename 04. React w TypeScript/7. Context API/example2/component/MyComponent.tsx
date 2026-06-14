import { useContext } from "react"
import { MyContext } from "../context/MyContent"



const MyComponent = () => {

    const {count ,increment , decrement} = useContext(MyContext);
    return (
     <>
        <h1>COUNT : {count}</h1>
        <button onClick={increment}>++</button> 
        <button onClick={decrement}>--v  </button>
    </>
    )
}

export default MyComponent