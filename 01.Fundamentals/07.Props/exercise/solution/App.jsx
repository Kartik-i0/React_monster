import React from 'react'
import Product from './components/Product'
import Person from './components/Person'

const App = () => {
  return (
    <div>
        <Person name={"Kartik"} age={20} />
        <Product name={"BMW F450"} price={"$4200"}/>
    </div>
  )
}

export default App