import React from "react";

function FunctionStateExample() {
  const [name, setName] = React.useState({ firstName: "", lastName: "" });

  /**
   * useState() is asynchronous and batched
   *
   * In function components, the state doesn't have to be an object — although it can be if you want.
   * useState() does not automatically merges the object you provide into the current state
   */
  return (
    <div>
      <h1>Function Based Component with useState()</h1>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <p>
        {name.firstName} {name.lastName}
      </p>
      <pre>{JSON.stringify(name, null, 2)}</pre>
    </div>
  );
}

export default FunctionStateExample;
