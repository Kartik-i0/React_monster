export type UserShape = {
  username : string ,
  email : string,
  age : number ,
  location : string[],
}


const UserInfo = ({username , email , age , location }:UserShape) => {
  return (
    <>
    <ul>
      <li>{username}</li>
      <li>{email}</li>
      <li>{age}</li>
      <li>{JSON.stringify(location)}</li>
    </ul>
    </>
  )
}

export default UserInfo