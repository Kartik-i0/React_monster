import { createContext, useState, type FC, type ReactNode } from 'react';

// Define a type for your context data
type MyContextData = {
    value :string,
    setValue : (newValue:string) => void ;
}

// Create a context with an initial value
const Mycontext = createContext<MyContextData | undefined>(undefined);

// Create a provider component
type MyContextProviderProps = {
    children : ReactNode;
}

export const MyContextProvider : FC<MyContextProviderProps> = ({children}) =>{
    const [value , setValue] = useState<string>("0");

    const contextValue : MyContextData = {
        value ,
        setValue,
    }

    return(
        <Mycontext.Provider value={contextValue}>
            {children} 
        </Mycontext.Provider>        
    )
}

export default Mycontext