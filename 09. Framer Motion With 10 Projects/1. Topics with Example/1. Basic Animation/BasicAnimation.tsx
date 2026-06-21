import {motion} from 'motion/react'

const BasicAnimation = () => {
  return (
    <div className="playgruound bg-black h-screen w-full flex items-center justify-around">



      {/* <motion.div 
      animate={{x:50}}
      className='box-border bg-pink-500 w-30 h-30' /> */}

      {/* <motion.div 
      animate={{y:100 }}
      className='box-border bg-pink-500 w-30 h-30' /> */}
      

      <motion.div 
      animate={{x:100 ,y:100 }}
      className='box-border bg-pink-500 w-30 h-30' />


      {/* <motion.div 
      animate={{rotate:360 , transition:{duration:4}}}
      className="w-40 h-40 rounded-b-2xl bg-pink-500"
      >
      </motion.div> */}



    </div>
  )
}

export default BasicAnimation
