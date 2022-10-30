import { useState } from "react";

/**
 * Making other changes to an array
 *
 * There are some things you can’t do with the spread syntax and non-mutating
 * methods like map() and filter() alone. For example, you may want to
 * reverse or sort an array. The JavaScript reverse() and sort() methods
 * are mutating the original array, so you can’t use them directly.
 *
 * However, you can copy the array first, and then make changes to it.
 */

const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

export default function ReverseAnArray() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>
        Reverse (without mutating the original array)
      </button>
      <ul>
        {list.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}
