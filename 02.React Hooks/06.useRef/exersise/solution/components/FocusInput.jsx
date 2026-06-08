import React ,{useRef} from 'react'


const FocusInput = () => {
    const inputElem = useRef(null);
    const focusOnIP =() =>{
        inputElem.current.focus();
    }
    return (
    <div>
        <input 
        type="text" 
        ref={inputElem}
        />

        <button onClick={focusOnIP}> Focus On Input Field</button>

    </div>
  )
}

export default FocusInput