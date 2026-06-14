import { useReducer } from "react"
import { CounterReducer } from "./CounterReducer"

const Counter = () => {
    const [state , dispatch] = useReducer( CounterReducer,{count:10})

    return (
    <>
        <h1>Count : {state.count}</h1>
        <button onClick={ () => dispatch({type : "INCREMENT"})}> INCREMENT</button>
        <button onClick={ () => dispatch({type :"DECREMENT"})} > DECREMENT</button>
        <button onClick={ () => dispatch({type :"RESET"})} > RESET</button>
    </>
  )
}

export default Counter