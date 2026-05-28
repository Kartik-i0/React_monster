import React from 'react'

const UserStatus = ({isloggedIn , isAdmin}) => {
    return (isAdmin && isloggedIn) ?  <AdminWelcome/> : ( isloggedIn ? <UserWelcome/> : <Invalid/>) ; 

    // if(isloggedIn && isAdmin){
    //     return <AdminWelcome/>
    // }else if(isloggdIn){
    //     return <UserWelcome/>
    // }else{
    //     return <Invalid/>
    // }
}

const AdminWelcome = () =>{
 return(
      <>
        <h1>Welcome Admin!</h1>
     </>
 ) 
}


const UserWelcome = () =>{
    return(
        <>
            <h1>Welcome User!</h1>
        </>
    )
}

const Invalid = () =>{
    return(
        <>
            <h1>InValid Person.</h1>
        </> 
    )
}

export default UserStatus