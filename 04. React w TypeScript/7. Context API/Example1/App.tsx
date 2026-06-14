import MyComponent from './component/MyComponent';
import{ MyContextProvider } from './context/Mycontext';

const App = () => {
  return (
    <>

    <MyContextProvider>
        <MyComponent/>
    </MyContextProvider>        
        
    </>
  )
}

export default App