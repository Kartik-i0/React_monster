import React from 'react'

const Weather = ({temperature}) => {
        
  if(temperature <15){
      return <div>It's Cold outside . </div>
  }else if(temperature >=15 && temperature <25 ){
    return( <div> It Nice Outside .</div>)
  }else if(temperature >= 25){
    return(<div> It's Hot outside!</div>)
  }

      
      
}

export default Weather
