import { useState } from "react";

let nextId = 0;

export default function AddArray() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Adding to an array</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setName("");
          // push() will mutate an array, which you don’t want:
          /* artists.push({
            id: nextId++,
            name: name,
          }); */
          setArtists([
            ...artists, // it contains all the old items (push)
            {
              //and one new item at the end
              id: nextId++,
              name: name,
            },
            // ...artists, // it contains all the old items (unshift)
          ]);

          console.log("artists", artists);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
