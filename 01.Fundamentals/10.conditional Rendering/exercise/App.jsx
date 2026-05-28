import React from 'react'
import Weather from './components/Weather' 
import UserStatus from './components/UserStatus'
import Greeting from './components/Greeting'

const App = () => {
  return (
    <div>
        <Greeting afternoon={true}/>
        <UserStatus isAdmin={false} isloggedIn={true}/>
        <Weather temperature={13}/>
    </div>
  )
}

export default App