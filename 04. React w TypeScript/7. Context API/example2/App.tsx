import { MyContextProvider } from "./context/MyContent"
import MyComponent from './component/MyComponent';

const App = () => {
  return (
    <MyContextProvider>
        <MyComponent/>
    </MyContextProvider>
    
    
  )
}

export default App