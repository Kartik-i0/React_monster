import { type UserShape } from "./UserInfo"

type AdminShape = UserShape & {admin : string  };


const AdminInfo = ({username , email , age , location , admin}:AdminShape) => {
  return (
    <>
    <ul>
      <li>{username}</li>
      <li>{email}</li>
      <li>{age}</li>
      <li>{JSON.stringify(location)}</li>
      <li>{admin}</li>
    </ul>
    </>
  )
}

export default AdminInfo