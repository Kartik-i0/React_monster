import { useContext } from "react"
import Mycontext from "../context/Mycontext"



const MyComponent = () => {
    const context = useContext(Mycontext)
    if(!context)
        throw new Error("Mycomponent must be used within a MyContextProvider ");

    const {value , setValue} = context;
    return (
    <>
        <div>
            <p> Value : {value}</p>
            <input 
            type="text"
            value={value} 
            onChange={(e)=>setValue(e.target.value)}
            />
        </div>
    </>
  )
}

export default MyComponent