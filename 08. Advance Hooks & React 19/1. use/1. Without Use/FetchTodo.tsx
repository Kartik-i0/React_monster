import { useEffect, useState } from "react";

const FetchTodo = () => {
    const [todo , setTodo] = useState<any>([]);
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
                const data = await res.json();
                setTodo(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false);
            }
        };
        
        console.log(todo)
        fetchData();
    },[]);

    
    return (
    <div className="text-3xl bg-black h-screen text-white flex justify-around  items-center">
        <div className="font-extralight"> {loading?<h1>Loading...</h1> : <h1> Todo : {todo?.title}</h1>}   </div>
       
        
    </div>
  )
}

export default FetchTodo
