import { motion, spring } from 'motion/react';

const App = () => {
  return (
    <div className='bg-black h-screen w-screen flex items-center justify-center' > 
      
      {/* whileHover */}
       {/* <motion.div
        className='bg-pink-600 w-40 h-40'
        whileHover={ {scale:1.2 , rotate: 10}}
        transition={{type:spring , stiffness:300}}
        />     
         */}

      {/* whileTap     */}
        {/* <motion.div
        className='bg-pink-500 w-30 h-30'
        whileTap={{scale:0.8 , backgroundColor:"yellow"}}
        transition={{type:spring , stiffness:500 }}
        /> */}


        {/* whileDrag */}
        <motion.div 
          className='bg-pink-500 w-30 h-30'
          drag
          whileDrag={{scale:1.1 ,backgroundColor:"red"}}
          dragConstraints={{
            top:-50,  
            bottom:-50,  
            right:-50,  
            left:-50  
          }}
          transition={{type:spring , stiffness:300}}
      />
    </div>
  );
};

export default App
