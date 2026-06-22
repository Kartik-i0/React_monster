// Variants => Variant are a way to define different STATES or STYLES for our animations in a more organized way .
// think of them  as predefined animation setups that we can switch between easily 

// 1. => Define Variavbles : Create a set of named styles ( like "hidden" , "visible" , etc.) that describes how the
// element should look or behave in each state
// 2. => Apply this variants  to our animated component , making it easy to switch between states without repeating code. 


import { motion } from 'motion/react';
import { useState } from 'react';


const Varinats = () => {
    const [isVisible , setIsVisible ] = useState(true)   

    return (
    <div className=" bg-black h-screen w-full flex items-center justify-center ">
        <motion.div 
        className='w-40 h-40 rounded-full bg-pink-600'
        variants={{
            hidden:{opacity: 0 , scale:0.8} ,
            visible:{opacity: 1 , scale:1} ,
            exit:{opacity: 0 , scale:0.5} ,
            }}
            initial="hidden"

          animate={isVisible ? "visible" : "hidden"}  
          exit="exit"
          onClick={()=>setIsVisible(!isVisible)}
        />

    </div>
  )
}

export default Varinats
