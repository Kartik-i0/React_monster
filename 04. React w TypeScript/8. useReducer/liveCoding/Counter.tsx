import { useReducer } from "react";

//Define types for State and actions
type State ={
    count : number
};

type Action = { type : "INCREMENT" } | {type : "DECREMENT"}

// Reducer Function with Types
const reducer = (state :State , action : Action) :State =>{
    switch(action.type){
        case "INCREMENT":
            return{ count : state.count+1};
        case "DECREMENT":   
            return{ count : state.count-1 }
        default :
            return state;
        }
} 



const Counter = () => {
    const [state  ,dispatch] = useReducer(reducer ,{count : 0});
  
    return (
    <>
        <div>
            <p>Count : {state.count}</p>
            <button onClick={ () => dispatch({ type:"INCREMENT" })} >INCREMENT</button>
            <button onClick={ () =>dispatch({ type:"DECREMENT"})} >DECREMENT</button>
        </div>
    </>
    )
}

export default Counter