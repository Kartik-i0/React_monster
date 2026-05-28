import React from 'react'

const Person = ({name , age}) => {
  return (
    <div>
        <h2>Name : {props.name} </h2>
        <p>age : {props.age} </p>
    </div>
  )
}

export default Person