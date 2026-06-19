
const Form = () => {
 
    const formAction = (formData:any) =>{
        const userData ={
            name : formData.get('name'),
            email :formData.get('email'), 
            password : formData.get('password')
        };  

        console.log(userData);  
    }
 
    return (
    <div>
        <form action={formAction}>
            <label htmlFor="name">Name:</label> <br/>
            <input 
            className="border-2 border-black rounded"
            type="text"
            id="name"
            name="name"
             />{" "}
            <br />

            <label htmlFor="email">Email :</label> <br/>
            <input 
            className="border-2 border-black rounded"
            type="text"
            id="email"
            name="email"
             />{" "}
            <br />

            <label htmlFor="password">password :</label> <br/>
            <input 
            className="border-2 border-black rounded"
            type="text"
            id="password"
            name="password"
             />{" "}
            <br />

            <button type="submit" className="bg-black text-white px-4 py-2 mt-3"> 
                Submit
            </button>

        </form>
    </div>
  )
}

export default Form
