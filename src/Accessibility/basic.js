import React from "react";
import {
  Combobox,
  ComboboxItem,
  ComboboxPopover,
  useComboboxState,
} from "ariakit/combobox";
import "./style.css";

function Fruits() {
  const fruits = [
    "🍎 Apple",
    "🍇 Grape",
    "🍊 Orange",
    "🍓 Strawberry",
    "🍉 Watermelon",
  ];
  return fruits.map((fruit) => {
    return (
      <ComboboxItem className="combobox-item" key={fruit} value={fruit}>
        {fruit}
      </ComboboxItem>
    );
  });
}

function FruitsCombobox() {
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
          </ComboboxPopover>
        }
      </div>
    </>
  );
}

export default FruitsCombobox;
