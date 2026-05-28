import React from 'react'

const UserList = () => {
     const users = [
     { id: 1, name: "Alice", age: 25 },
     { id: 2, name: "Bob", age: 30 },
     { id: 3, name: "Charlie", age: 22 },
   ];
   

  return (
    <div>
        <h1> List Of the users = </h1>
        
            { users.map( user=>(
                <div key={user.id}>
                     <h1> name : {user.name}</h1>                
                    <h1> age : {user.age}</h1>
                </div>
            ))}
        
    </div>
  )
}

export default UserList