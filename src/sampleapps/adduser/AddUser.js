import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";
import { useState } from "react";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [userName, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUser = (event) => {
    event.preventDefault();

    // defensive programming
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age should be greater than 0.",
      });
      return;
    }

    props.onAddUser(userName, age);

    setUsername("");
    setAge("");
  };

  const updateUserName = (event) => {
    setUsername(event.target.value);
  };

  const updateAge = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUser}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={updateUserName}
            value={userName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            onChange={updateAge}
            value={age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
