// useRef is use to manage any kind of DOM manipulations.
import { useRef } from "react";

function App() {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Kartik";
    console.log("hii")
  };

  return (
    <>
      <input type="text" ref={ inputElement } />
      <button onClick={ focusInput }>Focus & write Kartik</button>
    </>
  );
}

export default App;