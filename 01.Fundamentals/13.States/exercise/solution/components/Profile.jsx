import React, { useState } from 'react'

const Profile = () => {
  const [profile , setProfile] = useState({
    name:"" ,
    age:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };


  return (
    <div>
      <label >
        Name:
        <input 
        type="text" 
        name='name'
        value={profile.name}
        onChange={handleChange}/> 
      </label>

      <label >
        Age:
        <input 
        type="number" 
        name="age" 
        value={profile.age}
        onChange={handleChange}
        /> 


        <section>
          <h3>Profile Information </h3>
            <h4><i>Name :</i> {profile.name}</h4>
            <h4><i> Age :</i> {profile.age}</h4>
        </section>
      </label>
    </div>
  )
}

export default Profile