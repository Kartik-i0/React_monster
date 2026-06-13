import React, { useState } from "react"

interface formShape{
    name : string,
    email: string
}

const ContactForm = () => {
    const [formData , setFormData] = useState<formShape>({
        name:"",
        email:""
    })  

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission (e.g., send data to an API)
    }

    return (

    <div>
        <h1>Form Contact </h1>
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             name="name"
             placeholder="Name"
             value={formData.name}
             onChange={handleChange}
             />

             <input
             type="text"
             name="email"
             value={formData.email}
             placeholder="E-mail"
             onChange={handleChange}
             />

             <button type='submit'>Submit </button>
        </form>
    </div>
  )
}

export default ContactForm