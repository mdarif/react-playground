import { useState } from "react";

export default function SingleHandler() {
  const [person, setPerson] = useState({
    firstName: "Mohammad",
    lastName: "Arif",
    email: "arif.mohammed@gmail.com",
  });

  function handleChange(e) {
    setPerson({
      ...person,
      // Computed property name
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <h2>Using a single event handler for multiple fields</h2>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
