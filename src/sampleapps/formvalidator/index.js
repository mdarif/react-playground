import { useState } from "react";
import "./form.css";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = findErrors();
    setMessage(errors.length ? errors.join(", ") : "User Created!");
  };

  const findErrors = () => {
    const errors = [];

    // Blank email, password, and passwordConfirm check
    if (!email || !password || !passwordConfirm) {
      errors.push("All the fields should be filled in");
    }

    //email validation
    if (!email.includes("@")) {
      errors.push("Email should contain @");
    }

    //password validation
    if (password.length < 8) {
      errors.push("Password should be at least 8 characters long");
    }

    //password and passwordConfirm validation
    if (password !== passwordConfirm) {
      errors.push("Passwords should match");
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      {message}
      <input type="submit" value="Submit" />
    </form>
  );
}
