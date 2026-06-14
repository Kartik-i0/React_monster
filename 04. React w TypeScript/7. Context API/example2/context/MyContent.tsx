import { createContext,  type FC,  type ReactNode, useState } from 'react';

// step 1 : Create context 
type myContextProp = {
    count : number ;
    increment: () => void ;
    decrement: () => void ;
}


export const MyContext = createContext<myContextProp>({
    count : 0,
    increment : () =>{},
    decrement : () => {},
}) 


// Step 2 : Create a provider component. 
interface MyProviderProps {
    children : ReactNode
}


export const MyContextProvider: FC<MyProviderProps> = ({children}) =>{
    const [count , setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);    
    } 

    const decrement = () =>{
        setCount(count-1);
    }

    return(
        <MyContext.Provider value={{count , increment , decrement}} >
            {children}
        </MyContext.Provider> 
    )
}


