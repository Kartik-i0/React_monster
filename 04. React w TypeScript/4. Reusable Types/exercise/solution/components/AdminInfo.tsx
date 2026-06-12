import {type Admin } from "../types"

const AdminInfo: React.FC<Admin>= ({name , email , id , role  ,   lastLogin }) => {
  return (
    <>
    <h2>Admin Information </h2>
    <ul>
      <li>Name :{name}</li>
      <li>Email:{email}</li>  
      <li>Id   :{id}</li>
      <li>Role :{role}</li>
      <li>LoginTime:{lastLogin ? lastLogin.toLocaleString() : 'N/A'}</li>
    </ul>
    </>
  )
}

export default AdminInfo