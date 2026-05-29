import React, { useState } from 'react'



const App = () => {
  const [friends ,setFriend] = useState(["Kartik","Abhishek" ,"Shreyash" ,"Jayesh","Soham" ,"Piyush"])
  const addFriend = () =>{
    setFriend([...friends ,"vinit"]);
    console.log(friends);
  }

  const removeFriend =()=>{
    setFriend(friends.filter(f => f!=="vinit"));
  }

  const updateOne = () =>{
    setFriend(friends.map(f =>(f=="Kartik" ? "Kartik Jadhav" : f)));
  }



  return (
    <div>
      <h1>list Of Friends:</h1>
        <ol>
          {friends.map((friend) =>(
              <li key={Math.random()*10000}>{friend}</li>
          ))}
        </ol>

      <button onClick={addFriend}> Add friend </button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateOne}>update Friend</button>
          
    </div>
  )
}

export default App