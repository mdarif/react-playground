import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function RemoveFromAnArray() {
  const [artists, setArtists] = useState(initialArtists);

  const removeItem = (id) => {
    /**
     * Array.prototype.filter()
     *
     * The filter() method creates a 'shallow copy' of a portion of a given array,
     * filtered down to just the elements from the given array that pass the
     * test implemented by the provided function.
     *
     * filter((element, index, array) => { ... } )
     */

    // create an array that consists of those artists whose IDs are different from artist.id
    const filteredArtists = artists.filter((artist) => artist.id !== id);
    setArtists(filteredArtists);
  };

  return (
    <>
      <h1>Removing from an array</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name} {""}
            <button onClick={() => removeItem(artist.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
