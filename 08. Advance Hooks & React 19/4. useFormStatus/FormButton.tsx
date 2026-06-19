import { useFormStatus } from "react-dom"

const FormButton = () => {
    const status = useFormStatus(); 
    // const {action  , data ,method , pending } = useFormStatus()
    
    return (
    <div>
         <button  type="submit"  disabled={status.pending} className="bg-black text-white px-4 py-2 mt-3"> 
            {status.pending ? 'submiting.... ' : 'submit' }
        </button>
    </div>
  )
}

export default FormButton
