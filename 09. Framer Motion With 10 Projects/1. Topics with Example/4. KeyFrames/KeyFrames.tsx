// KeyFrames => keyFrames allow us to create more complex animations by specifying multiple points
// in an animation animation Sequence . instead of just animating from one state to another , we can define 
// several intermediates states (frames) to control the animation more precisely.  
// Simple => Splitting / Dividing Animation into multiple parts (frmas);
// Syntax =>[start ,end]

import { motion } from 'motion/react'

const KeyFrames = () => {
  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
        
        <motion.div
        className='bg-pink-600  w-40 h-40' 
        animate={{
            // prop: [start ,.... ,end]
            scale:[1 , 2 , 2 , 3,4, 3, 2 ,1],
             rotate:[0 , 0 , 270 , 270 , 0],
             borderRadius: ["20%" , "20%" ,"50%","50%","20%"]
        }}

        transition={{duration:5}}
        />
        
    </div>
  )
}

export default KeyFrames
