// React components use props to communicate with each other. Every parent component can pass some information
//  to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value
//  through them, including objects, arrays, and functions.




import React from 'react'
const App = () => {
  return (  
    <User img={"https://avatars.githubusercontent.com/u/85052811?v=4"} 
      name ={"Kartik Jadhav"}
      age={22}
      isMarried = {true}
      hobbies = {["Coding","Horse Riding","fenching"]}
      />
  )
}


const User = (props) =>{
  return(
    <>
      <section>
        <img src={props.img} alt="" />
        <h1>name : {props.name}</h1>
        <h2>Age : {props.age}</h2>
        <h3>isMarried : {props.isMarried  }</h3>
        <h4> Hobbies : {props.hobbies }</h4>
      </section>
    </>
  )

}


export default App