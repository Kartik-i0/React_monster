import React, { useState } from 'react'

const Todo = () => {
    const [todos , setTodos] = useState([]);
    const [input , setInput] = useState('');

    const handleSubmit = () => {
        
        setTodos( (todos)=>
            todos.concat({
                text : input,
                id : Math.floor(Math.random()*10)
            })
        )

        setInput('')
    }

    const remTodo = (t) =>{
        setTodos(todos => todos.filter(todo => todo.id != t.id))
    }  

    return (
    <div className='bg-violet-100 h-screen w-screen flex items-center justify-center'>
        <div className='w-[30%] bg-gray-900 p-10 rounded-2xl '>
            <div className='w-full'>
                <div>
                    <label htmlFor="todoInput" className="text-white text-2xl block mb-2.5 font-semibold">Enter Todo</label>
                    <input type="text" onChange={ e => setInput(e.target.value) } value={input} id="todoInput" className="text-white bg-gray-800 border border-gray-700 text-base rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full px-3.5 py-3 shadow-sm placeholder:text-gray-400" placeholder="Enter Todo" required />
                </div>

                <div className='py-3 flex justify-center items-center'>
                    <button onClick={handleSubmit} type="button" className="w-[50%] rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-medium py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600">Add</button>
                </div>
            </div>
                

            
            <div className=' text-white w-full'>
                    <div className=' py-3  text-2xl font-semibold text-gray-500'>ALL Todos</div>
                     <div className='flex flex-col gap-3 items-center'>
                            {todos.length === 0 ? (
                                <div className='text-gray-400 text-center py-6'>No todos yet. Add one to get started!</div>
                            ) : (
                                todos.map((todo, idx) => (
                                <div key={todo.id} className='w-[90%] mx-auto flex items-center justify-between bg-gray-800 px-3 py-2 rounded-lg'>
                                     <div className='flex items-center gap-3'>
                                         <span className='text-gray-400 font-medium'>#{idx + 1}</span>
                                         <span className='text-white'>{todo.text}</span>
                                     </div>
                                     <button onClick={() => remTodo(todo)} aria-label={`Delete todo ${idx + 1}`} className='text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md font-semibold'>
                                         X
                                     </button>
                                </div>
                                 ))
                            )}
                     </div>
                     
            </div>
        </div>
    </div>
  )
}

export default Todo