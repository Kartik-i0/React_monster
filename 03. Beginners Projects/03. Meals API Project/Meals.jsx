import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Meals = () => {
  const [items, setItems] = useState(null);
    useEffect(()=>{
        axios
        .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res)=>{
            console.log(res.data.meals)
            setItems(res.data.meals)
        }).catch(error=>{
            console.log("Error while Fetching the data.", error )  
            setItems([])
        })
    }, [])

    return  items ? ( 
        <div className='bg-black h-full'>
            {/*HEADER*/}
            <div className='flex justify-around'>   
                <h1 className=' font-serif p-5  text-pink-600 text-4xl hover:text-5xl hover:font-extrabold  '>Meals List</h1>
            </div>
            
            {/* Main Menu */}
            <div className=' border-t border-gray-800 '>
                {/* Meals List */}
                
                <div className='grid md:grid-cols-2 lg:grid-cols-3 p-5 justify-around  h-screen overflow-scroll  ' >                
                    {items.map((item , index)=>(
                            <div className='bg-gray-100 m-2 h-100 rounded-2xl  '>
                                <img src={item.strMealThumb} className='object-cover h-[80%] p-3 rounded-3xl  w-full ' />
                                <div className='flex-none border-t md:flex p-2  m-2 md:justify-between h-full  font-bold  '>
                                    <p>{item.strMeal}</p>
                                    <p>#{item.idMeal}</p>
                                </div>        

                            </div>
                    ))};
                </div>

            </div>
        </div>
        )
     : (
        <div className='bg-black w-screen h-screen flex items-center justify-around'>
            <h1 className='text-7xl font-bold text-white '>Loading......</h1>
        </div>
        )
}

//   useEffect(() => {
//     axios
//       .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
//       .then((res) => {
//         setItems(res.data.meals);
//       })
//       .catch((error) => {
//         console.error(error);
//         setItems([]);
//       });
//   }, []);

//   return items ? (
//     <div>
//       <h2>Meals :</h2>
//       <ol>
//         {items.map((item, index) => (
//           <li key={index}>{item.strMeal}</li>
//         ))}
//       </ol>
//     </div>
//   ) : (
//     <div>Loading....</div>
//   );
// };

export default Meals