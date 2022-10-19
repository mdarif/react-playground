import React from "react";
import {
  Combobox,
  ComboboxItem,
  ComboboxPopover,
  useComboboxState,
} from "ariakit/combobox";
import "./style.css";

async function getFruitsData() {
  try {
    const resp = await fetch(
      `https://634fc551df22c2af7b597ded.mockapi.io/api/react/playground/fruits`
    );
    return resp.json();
  } catch (error) {
    console.log("error", error);
  }
}

function Fruits() {
  getFruitsData().then((fruits) => {
    return fruits.map((fruit) => (
      <ComboboxItem key={fruit.id} value={fruit.name}>
        {fruit.name}
      </ComboboxItem>
    ));
  });

  // return data.map((fruit) => {
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
            <Fruits />
            {/* <React.Suspense fallback={<div>Loading...</div>}>
              <Fruits query={combobox.value} />
            </React.Suspense> */}
          </ComboboxPopover>
        }
      </div>
    </>
  );
}

export default FruitsComboboxSuspense;
