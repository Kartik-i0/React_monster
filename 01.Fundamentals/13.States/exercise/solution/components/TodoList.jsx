import React, { useState } from 'react'

const TodoList = () => {
   const [todos , setTodos ] = useState(["Goto Gym" , "Eat a meal" , "Work"])
   const [inputVal ,setInputVal] = useState("")

   const handleChange = (event)=>{
        const newVal = event.target.value;
        setInputVal(newVal);
        console.log(newVal)
   } 
 
   const handleSubmit = (e) =>{
    e.preventDefault();
    if(inputVal.trim()){
        setTodos([...todos , inputVal]);
        setInputVal("")
        console.log(todos)
    }
   }
    return (
    <div>

        <form  onSubmit={handleSubmit}>
            <h1>Add Todo</h1>
            <input
             type="text" 
             name="newtodo" 
             value={inputVal}
             id="" placeholder='Enter new Todo'  onChange={handleChange}/>
            <button  type='submit'> Add new todo</button>
        </form>


        <h2><i><b> All Todos : </b></i></h2>
        <ol>
            {todos.map((t)=>(
                <li key={Math.random()*1000}><h3><b>{t}</b></h3></li>
            ))
            
            }
        </ol>
        
    </div>
  )
}

export default TodoList