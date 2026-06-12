import { useState } from "react";

interface userProfile {
    name :string ;
    email:string;
    age:number;
}


const UserProfile = () => {
    const[profile, setProfile] = useState<userProfile>({
        name:"",
        email:"",
        age:0
    })

    const updateAge = (age:string) =>{
            setProfile( prev => ({...prev, age : Number(age)}))
    }

    const updateName = (name:string) =>{
            setProfile( prev => ({...prev, name}))
    }

    
    const updateEmail = (email:string) =>{
            setProfile( prev => ({...prev, email}))
    }

    return (
    <>
        <h2>User Profile</h2>
        <input 
        type="text" placeholder="Name" 
        value={profile.name}
        onChange={e => updateName(e.target.value) } 
        />        
        
        <input 
        type="text" placeholder="Email" 
        value={profile.email}
        onChange={e => updateEmail(e.target.value) } 
        />

        <input 
        type="text" placeholder="Age" 
        value={profile.age > 0 ? profile.age :""}
        onChange={e => updateAge(e.target.value) } 
        />
    
        <h3>Profile summary</h3>
        <p>Name:{profile.name}</p>
        <p>Age :{profile.age}</p>
        <p>email :{profile.email}</p>
    </>

)
}

export default UserProfile