import { motion, spring } from 'motion/react';

const AnimatedCard = () => {
  return (
    <>
        <motion.div 
            className='max-w-sm mx-auto bg-white  rounded-lg shadow-lg overflow-hidden '
            initial={{scale:1 ,rotate:0 }}
            whileHover={{scale:1.05 ,rotate:3}}
            whileTap={{scale:0.95}}
            drag
            dragConstraints={{
             left: 0 ,right: 50, top: -50, bottom: 50 
            }}
            dragElastic={0.2}
            transition={{ type: "spring", stiffness: 300 }}
        >
        
            <img 
             className='w-full h-48 object-cover'
             src="https://images.unsplash.com/photo-1728408828574-70a460530093?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
           
            />
            <div className='p-6 '>
                <h2 className='text-xl font-semibold font-serif'>Dynamic Card Title</h2>
                <p className='text-md font-sans'>This is a simple card with Framer Motion animations and Tailwind CSS styling.</p>
                <motion.button 
                    whileHover={{ scale:1.02}}
                    whileTap={{ scale:0.9, backgroundColor:"#09e0e8"}}
                    transition={{type:spring , stiffness:300}}
                    className='px-2  py-1 my-2 bg-cyan-500 rounded-lg w-20 text-[18px] font-serif '
                > click </motion.button> <motion.button/>
            </div>

        </motion.div>
    </>
  )
}

export default AnimatedCard
