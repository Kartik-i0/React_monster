import { useRef } from "react"

const FocuseInput = () => {
    
    const inputElem = useRef<HTMLInputElement>(null);  


    return (
    <div>
        <h1>Focus on Input Box: </h1>
        <input type="text"  ref={inputElem} />
        <button onClick={ () => {inputElem.current?.focus();}}>Click me to focus on input box</button>
    </div>
  )
}

export default FocuseInput