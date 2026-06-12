import {type Info} from '../types'



const UserInfo = ({name , email , id  }:Info) => {
  return (
    <>
    <h2>User Information </h2>
    <ul>
      <li>Name :{name}</li>
      <li>Email:{email}</li>
      <li>ID   :{id}</li>
    </ul>
    </>
  )
}

export default UserInfo