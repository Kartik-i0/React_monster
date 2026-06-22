import { motion } from 'motion/react';
// TRANSITION Properties 
// => Duration -> How long animation takes .
// => Easing -> The speed curve of the animation . 
// => Delay -> How long to wait before starting the animation .


const Transitions = () => {
  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
            hii 

            <motion.div 
            className=' rounded-full w-30 h-30 bg-pink-700'
            initial={{x:0}}
            animate={{x:200}}
            // transition={ {delay:3}}
            // transition={{delay:5}}   
            // transition={{duration:3}}         
            transition={{duration:3, ease:"easeInOut", delay:1}}         
            ></motion.div>    

    </div>
  )
}

export default Transitions


