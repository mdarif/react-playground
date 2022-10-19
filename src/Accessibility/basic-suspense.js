import React from "react";
import {
  Combobox,
  ComboboxItem,
  ComboboxPopover,
  useComboboxState,
} from "ariakit/combobox";
import "./style.css";
import axios from "axios";

function Fruits({ query = "" }) {
  const fruits = axios(
    `https://634fc551df22c2af7b597ded.mockapi.io/api/react/playground/fruits?search=${query}`
  ).then((res) => console.log(res.data));

  console.log("fruits", fruits);
  // return fruits.map((fruit) => {
  //   return (
  //     <ComboboxItem className="combobox-item" key={fruit} value={fruit}>
  //       {fruit}
  //     </ComboboxItem>
  //   );
  // });
}

function FruitsComboboxSuspense() {
  const combobox = useComboboxState();
  return (
    <>
      <div className="wrapper">
        <label>
          Fruit
          <Combobox
            state={combobox}
            className="combobox"
            placeholder="e.g., Apple"
          />
        </label>
        {
          <ComboboxPopover state={combobox} className="combobox-list">
            <React.Suspense fallback={<div>Loading...</div>}>
              <Fruits query={combobox.value} />
            </React.Suspense>
          </ComboboxPopover>
        }
      </div>
    </>
  );
}

export default FruitsComboboxSuspense;
