import React, { useState } from 'react'

const App = () => {
    const [friends , setFriends] = useState(["Yash" , "Soham" , "Piyush" , "Pranav"]);

    const addOne = () => setFriends([...friends , "kartik"]);
    const removeOne= () => setFriends(friends.filter((f) => f!== "Yash")) 
    const updateOne = () => setFriends(friends.map((f)=> f=="Soham" ? "Soham Pawar" : f)) 

    return (
    <div>
        <div>
           {friends.map((f) =>(
              <h2> {f}</h2>
           ))}
        </div>
        <button onClick={addOne}>Add Friend</button>
        <button onClick={updateOne}>Update Friend</button>
        <button onClick={removeOne}>Remove Friend</button>

    </div>
  )
}

export default App