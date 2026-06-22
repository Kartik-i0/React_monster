import {motion} from "motion/react"

const PulsingButton = () => {
  return (
    <div className="bg-black w-full h-screen flex items-center justify-around">
        <motion.button 
        className=" font-serif p-2 rounded-xl "
        animate={{
            scale:[1 ,1.1 ,1],
            background:['#3b82f6' , '#60a5fa' , '#3b82f6'],
        }}
        transition={{duration: 0.8 , ease:"easeInOut" ,repeat:Infinity}}
        >
            Click Me
        </motion.button>
    </div>
  )
}

export default PulsingButton
