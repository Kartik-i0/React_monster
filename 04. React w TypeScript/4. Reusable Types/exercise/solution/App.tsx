import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";

const App = () => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };

  const admin = {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <UserInfo {...user} />
      <AdminInfo {...admin} />
    </div>
  );
};

export default App;