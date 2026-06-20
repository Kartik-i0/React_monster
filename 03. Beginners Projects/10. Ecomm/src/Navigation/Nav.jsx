import { FaRegHeart } from "react-icons/fa";
import {MdOutlineShoppingCart } from 'react-icons/md'
import {BsPersonAdd} from 'react-icons/bs'

const Nav = ({query , handleInputChange}) => {
  return (
    <nav className=" flex border-b-2 justify-around items-center border-gray-200 p-2 z-50 pl-8">
        <div className="m-2">
            <input 
            type="text" 
            placeholder="Search" 
            className="py-2 px-3 border-none bg-[#f7f6f6] mr-5 rounded-sm relative w-70"
            value={query}
            onChange={handleInputChange} />
           
        </div>

        <div className="  flex gap-8"> 
            <a href="">
                <FaRegHeart  />
            </a>
            <a href="">
                <MdOutlineShoppingCart   />
            </a>
            <a href="">
                <BsPersonAdd  />
            </a>
        </div>
    </nav>
  )
}

export default Nav
