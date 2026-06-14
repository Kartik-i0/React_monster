import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};


const Mycomonent = () => {
  
    // State with type annotation
    const [data , setData] = useState<Product|null>(null);


    useEffect(() =>{
        const fetchData =  async () => {
            try {
                const respose =  await fetch("https://dummyjson.com/product/1");
                const result =  await respose.json();
                setData(result);
            } catch (error) {
                console.error("Error Fetching Data :", error )
            }
        };


        fetchData();
    },[])

    return (
    <div>

        {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>description: {data.description}</p>
          <p>price: {data.price}</p>
          <p>discountPercentage: {data.discountPercentage}</p>
          <p>rating: {data.rating}</p>
          <p>stock: {data.stock}</p>
          <p>brand: {data.brand}</p>
          <p>category: {data.category}</p>
          <p>thumbnail: {data.thumbnail}</p>
          {data.images.map((img , index) => (
            <img  key={index} src={img} />
          ))}
        </div>
      ):
      <h1>Loading...</h1> 
    }
    </div>
  )
}

export default Mycomonent