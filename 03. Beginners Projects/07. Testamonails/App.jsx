import React from 'react'
import Todo from './projects/Todo'
import Meals from './projects/Meals'
import Counter from './projects/Counter'
import Calculator from './projects/Calculator'
import ToggleBackgroundColor from './projects/ToggleBackgroundColor'
import HiddenSearchBar from './projects/HiddenSearchBar'
import Testinomials from './projects/Testinomials'
import Accordion from './projects/Accordion'
import FormValidation from './projects/FormValidation'

import {accordionData} from './projects/utils/content'
const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Meals/> */}
      {/* <Calculator/> */}
      {/* <ToggleBackgroundColor/> */}
      {/* <HiddenSearchBar/> */}
      <Testinomials/>  
      {/* <FormValidation/> */}
    </div>

    // <div   className=' bg-black p-10 min-h-screen '>
    //     {accordionData.map( ({title ,content})=>(
    //         <Accordion key={Math.random()*10} title={title} content={content}/>
    //     ))}
    //   </div>
  )
}

export default App