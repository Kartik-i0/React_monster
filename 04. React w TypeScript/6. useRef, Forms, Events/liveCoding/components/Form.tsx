"use client";

import { useRef , useState, type FormEvent} from "react";

const Form = () => {
    const [submitedData ,setSubmiteddata] = useState({
        name:"",
        email:"",
        password:""
    })

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null); 
    const password = useRef<HTMLInputElement>(null); 
  

    const handleSubmit = (e:FormEvent<HTMLFormElement>): void =>{
        e.preventDefault();
        const nameVal = name.current!.value;
        const emailVal = email.current!.value;
        const paswordVal = password.current!.value;

        setSubmiteddata( {
                
                name : nameVal,
                email : emailVal ,
                password : paswordVal
         });

         console.log(nameVal);
         console.log(emailVal);
         console.log(paswordVal);
         
    }



  
    return (
    <form  onSubmit={handleSubmit}>
        <input type="text" ref={name}  placeholder="Enter Name"/>
        <input type="text" ref={email} placeholder="E-mail" />
        <input type="text" ref={password}  placeholder="Password"/>  

        <button type="submit">Submit</button>
        
        <section>
            <h1>Submitted Data:</h1>
            <h2>Name :  {submitedData.name}</h2>
            <h2>Email :  {submitedData.email}</h2>
            <h2>Password :  {submitedData.password}</h2>
        </section>

    </form>
  )
}

export default Form