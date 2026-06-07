// 1. Importing (createContext)
import React , {createContext} from 'react'
import ComponentA from './components/ComponentA'

//2. Creating the insatance of the (createContext)
export const Data = createContext();
export const Data1 = createContext();


const App = () => {
  const name ="Kartik Jadhav";
  const age = 20 ; 

  
  return (
    <>
      {/* 3.Wrapping our component into Provider component  */}
      <Data.Provider value={name} >
        <Data1.Provider value={age}>
          <ComponentA/>
        </Data1.Provider>
      </Data.Provider>
      
    </>
  )
}

export default App