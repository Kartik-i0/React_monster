import {FaStar} from 'react-icons/fa';
import {IoBagHandle} from 'react-icons/io5';

const Card = () => {
  return (
    <>
        <section className='border border-gray-300 p-2 m-5 rounded-md'>
         <img className='w-50 p-2' src={'https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg'} alt="" />
    
         <div>
            <h3 className='font-bold font-serif py-2'>shoe</h3>
            <section className=' flex my-2 '>
                <FaStar color='#FDB515' /><FaStar color='#FDB515'/><FaStar color='#FDB515'/><FaStar color='#FDB515'/><FaStar color='#FDB515'/>
                <span className='-mt-1 mx-2'>4</span>
            </section>

            <section className='flex justify-between my-4'>
                <div >
                    <del>$399</del> $299
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
