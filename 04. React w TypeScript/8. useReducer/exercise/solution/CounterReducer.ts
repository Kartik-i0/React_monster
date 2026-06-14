
// 1. Define the state type
export type CounterState = {
    count : number ;
};

// 2 .Define the Action Types 
export type Action ={type:"INCREMENT"} |{type:"DECREMENT"} |{type:"RESET"};


// 3 .Define the reducer functionconst 
export const CounterReducer = ( state:CounterState , action:Action) :CounterState =>{

    switch(action.type){
        case "INCREMENT":
            return{count: state.count+1}
        case "DECREMENT":
            return{count: state.count-1}    
        case "RESET":
            return{count: 0}
        default :
            return state
        }
   }