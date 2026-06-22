import { easeInOut, motion } from 'motion/react';

const BouncingLoader = () => {
  return (
    <div className=" bg-black h-screen w-full flex justify-center items-center space-x-2 ">
            {[...Array(3)].map((_ ,index)=>(
                <motion.div
                key={index}
                className='w-6 h-6 bg-teal-500 rounded-full'  
                animate={{ y:[0 , -18 ,0 ]}}
                transition={{
                    duration:0.7,
                    ease:easeInOut,
                    repeat:Infinity,
                    repeatDelay:index*0.3
                }}
                />
                
            ))}

    </div>
  )
}

export default BouncingLoader
