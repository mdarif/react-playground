import React, { useState } from "react";

const list = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
];

export default function UsersList() {
  const [data, setData] = useState(list);

  const deleteUser = (id) => {
    // Filter the current id and shows the rest
    const updatedList = data.filter((user) => user.id !== id);
    setData(updatedList);
  };
  return (
    <div>
      <ul>
        {data.map((user) => {
          return (
            <li key={user.id}>
              {user.name}{" "}
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
