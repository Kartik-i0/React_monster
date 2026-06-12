import Button from "./components/Button"

const App = () => {
  return (
    <>
        <Button 
         label="Click" 
         onCick={()=>{console.log("clicked")}}
         disabled={false}
         />
    </>
  )
}

export default App