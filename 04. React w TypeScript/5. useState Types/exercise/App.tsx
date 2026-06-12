import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <>

        <h1>Counter</h1>
         <Counter/>
        <h1>UserProfile</h1>
        <UserProfile/>
        <h1>TodoList</h1>
        <TodoList/>
    </>

)
}

export default App