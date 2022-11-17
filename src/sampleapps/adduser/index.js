import { useState } from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevState) => {
      return [...prevState, { name: name, age: age, id: Date.now() }];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
};

export default App;
