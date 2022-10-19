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
    "Apple",
    "Banana",
    "Apricot",
    "Atemoya",
    "Avocados",
    "Blueberry",
    "Blackcurrant",
    "Ackee",
    "Cranberry",
    "Cantaloupe",
    "Cherry",
    "Black sapote/Chocolate pudding fruit",
    "Dragonrfruit",
    "Dates",
    "Cherimoya",
    "Buddha’s hand fruit",
    "Finger Lime",
    "Fig",
    "Coconut",
    "Cape gooseberry/Inca berry/Physalis",
    "Grapefruit",
    "Gooseberries",
    "Custard apple/Sugar apple/Sweetsop",
    "Chempedak",
    "Hazelnut",
    "Honeyberries",
    "Dragon fruit",
    "Durian",
    "Horned Melon",
    "Hog Plum",
    "Egg fruit",
    "Feijoa/Pineapple guava/Guavasteen",
    "Indian Fig",
    "Ice Apple",
    "Guava",
    "Fuyu Persimmon",
    "Jackfruit",
    "Jujube",
    "Honeydew melon",
    "Jenipapo",
    "Kiwi",
    "Kabosu",
    "Kiwano",
    "Kaffir lime/Makrut Lime",
    "Lime",
    "Lychee",
    "Longan",
    "Langsat",
    "Mango",
    "Mulberry",
    "Pear",
    "Lucuma",
    "Muskmelon",
    "Naranjilla",
    "Passion fruit",
    "Mangosteen",
    "Nectarine",
    "Nance",
    "Quince",
    "Medlar fruit",
    "Olive",
    "Oranges",
    "Ramphal",
    "Mouse melon",
    "Papaya",
    "Peach",
    "Rose apple/Water apple",
    "Noni fruit",
    "Pomegranate",
    "Pineapple",
    "Rambutan",
    "Snake fruit/Salak",
    "Raspberries",
    "Strawberries",
    "Starfruit/Carambola",
    "Soursop",
    "Tangerine",
    "Watermelon",
    "Sapota",
    "Star apple",
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
