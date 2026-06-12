import UserInfo from './components/UserInfo';
import AdminInfo from "./components/AdminInfo"

const App = () => {
  return (
    <>
      <h2>ADMIN PROFILE</h2>
      <AdminInfo username='kartik' email='kartik@gmail.com' age={20} location={['Maharashtra', 'IND' ] } admin='yes' /> 
      <h2>USER PROFILE </h2>
      <UserInfo username='Pranit' email='Pranit@gmail.com' age={22} location={['Karnatka', 'IND' ]}/>
    </>
  )
}

export default App