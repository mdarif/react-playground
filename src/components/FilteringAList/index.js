import { useState } from "react";
import { foods, filterItems } from "./data.js";

/**
 * Filtering a list
 *
 * In this example, the 'SearchBar' has its own 'query' state that controls the text input.
 * Its parent FilterableList component displays a 'List' of items, but it doesn’t take the search
 * query into account.
 *
 * Use the 'filterItems(foods, query)' function to filter the list according to the search query.
 * To test your changes, verify that typing “s” into the input filters down the list to
 * “Sushi”, “Shish kebab”, and “Dim sum”.
 *
 * Note that 'filterItems' is already implemented and imported so you don’t need to
 * write it yourself!
 */

export default function FilterableList() {
  const [query, setQuery] = useState("");
  const result = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={result} />
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search: <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      {items.map((food) => (
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.description}</td>
        </tr>
      ))}
    </table>
  );
}
