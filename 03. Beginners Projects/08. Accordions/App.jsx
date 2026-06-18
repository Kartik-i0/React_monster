import React from 'react'
import Accordion from './projects/Accordion'

import {accordionData} from './projects/utils/content'
const App = () => {
  return (

    <div   className=' bg-black p-10 min-h-screen '>
        {accordionData.map( ({title ,content})=>(
            <Accordion key={Math.random()*10} title={title} content={content}/>
        ))}
      </div>
  )
}

export default App