import { use } from "react";

 const FetchTodo = () =>{
    const data = use(fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json()));
    return <h1>{data.title}</h1>
 }

 export default FetchTodo
