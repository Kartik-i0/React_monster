import {useForm, type SubmitHandler} from 'react-hook-form'

interface FormData {
    firstname : string,
    lastname : string;  
    email: string;
    city : string;
    state: string;
    zip : string;
    country: string;
    completelocation: string;

}

const Form = () => {
    const {register , handleSubmit , formState:{errors} } = useForm<FormData>();
    
    // Define the submit handler with the proper type
    const onSubmit :SubmitHandler<FormData>=(data)=>{
        console.log(data);
    }

    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                    id='firstname'
                    type="text" 
                    {...register("firstname", { required: "Name is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
                </div>

                <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                    id='lastname'
                    type="text" 
                    {...register("lastname", { required: "last name is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>}
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input 
                    id='email'
                    type="text" 
                    {...register("email", { required: "Email is required" , pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message }</p>}
                </div>

                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input 
                    id='city'
                    type="text" 
                    {...register("city", { required: "City is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                </div>
                
                <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input 
                    id='state'
                    type="text" 
                    {...register("state", { required: "State is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                </div>
                
                <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">ZIP</label>
                    <input 
                    id='zip'
                    type="text" 
                    {...register("zip", { required: "ZIP is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>}
                </div>
                
                <div>
                    <label htmlFor="completelocation" className="block text-sm font-medium text-gray-700 mb-1">Complete Location</label>
                    <input 
                    id='completelocation'
                    type="text" 
                    {...register("completelocation", { required: "Complete location is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    {errors.completelocation && <p className="text-red-500 text-sm mt-1">{errors.completelocation.message}</p>}
                </div>

                <div className="pt-2">
                    <button type='submit' className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
                        Submit
                    </button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Form
