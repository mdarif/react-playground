import { useState, useRef } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [userName, setUsername] = useState("");
  const [error, setError] = useState();
  const nameRef = useRef();
  const ageRef = useRef();

  const addUser = (event) => {
    event.preventDefault();

    /**
     * Referencing Values with Refs
     *
     * When you want a component to “remember” some information, but you don’t
     * want that information to trigger new renders, you can use a ref.
     */

    // Use ref instead of state as there is no need to re-render the UI
    // refs are retained by React between re-renders
    let enteredName = nameRef.current.value;
    let enteredAge = ageRef.current.value;

    // defensive programming
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (+ageRef < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age should be greater than 0.",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);

    // Clear the input fields after form submission
    nameRef.current.value = "";
    ageRef.current.value = "";
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
          <input id="username" type="text" ref={nameRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" name="age" id="age" ref={ageRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
