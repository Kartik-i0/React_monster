import FormButton from './FormButton';

const Form = () => {
 
     const formAction = async (formData : any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newPost = {
      title: formData.get("name"),
      email: formData.get("email"),
    };
    console.log(newPost);
  };
 
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

           <FormButton/>

        </form>
    </div>
  )
}

export default Form
