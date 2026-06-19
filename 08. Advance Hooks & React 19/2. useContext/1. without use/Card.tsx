import { useContext } from "react"
import { ThemeContext } from "./Theme"


const Card = () => {
    const {theme , toggleTheme} = useContext(ThemeContext) 

     return (
     <div className={ ` min-h-screen flex  justify-around  items-center p-2  ${theme=='dark' ? 'bg-black' : 'bg-white'}`}>
            <div className={`w-[20rem] ,p-[2rem]  
            ${theme == 'light' ? 'bg-gray-400' : 'bg-teal-900' }`}>
            <h1 className={`text-teal-300 
                ${theme == 'light' ? 'text-black' : 'text-white' }`}>Theme Card
            </h1>
            
            <p className={`${theme =='light' ? 'text-black' : 'text-white'}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            cumque. Numquam exercitationem quae vitae vel veritatis similique illum
            repellat, itaque iure voluptates ut cum, facere a praesentium. Eveniet,
            ut itaque.
            </p>
            <button onClick={toggleTheme} className={`${theme==="light" ? 'text-black' : 'text-white'}`} > {theme==="light" ? "Switch to dark mode" : "Switch to light mode"}</button>     
        </div>
     </div>   
    
  )
}

export default Card
