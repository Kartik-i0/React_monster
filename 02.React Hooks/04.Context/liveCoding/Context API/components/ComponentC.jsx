import React from 'react'
import { Data,Data1 } from '../App'; 

const ComponentC = () => {
  return (
    <div>ComponentC

        {/* 4 .Consuming / Accessing Data */}
        <Data.Consumer>
          {(name)=>{
            // return <h1>My name is : {name}</h1>
            return(
                <Data1.Consumer>
                    {(age)=>{
                        return(
                            <>  
                                <h1>My name is : {name} </h1>
                                <h1>Age : {age} </h1>
                            </>

                        );

                    }}
                </Data1.Consumer>
            );
         }}
        </Data.Consumer> 
    </div>
  )
}

export default ComponentC