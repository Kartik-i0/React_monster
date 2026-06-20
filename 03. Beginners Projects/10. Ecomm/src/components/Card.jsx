import {FaStar} from 'react-icons/fa';
import {IoBagHandle} from 'react-icons/io5';

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
        <section className='border border-gray-300 p-2 m-5 rounded-md'>
         <img className='w-50 p-2' src={img} alt="" />
    
         <div>
            <h3 className='font-bold font-serif py-2'>{title}</h3>
            <section className=' flex my-2 '>
                {star}{star}{star}{star}
                <span className='-mt-1 mx-2'>{reviews}</span>
            </section>

            <section className='flex justify-between my-4'>
                <div >
                    <del className='mr-3'>{prevPrice}</del>   ${ newPrice}
                </div>

                <div className='mt-1'>
                    <IoBagHandle />
                </div>
            </section>
         </div>
        </section>
    </>

  )
}

export default Card
