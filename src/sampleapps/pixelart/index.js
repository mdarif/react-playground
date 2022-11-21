import React, { createContext, useContext, useState } from "react";

const ColorContext = createContext(null);

export default function PixelArt() {
  const [color, setPickColor] = useState("lightGrey");

  const pickColor = (color) => {
    setPickColor(color);
  };

  return (
    <div>
      <ColorContext.Provider value={{ color, pickColor }}>
        <ColorPicker />
        <Pixels />
      </ColorContext.Provider>
    </div>
  );
}

function ColorPicker() {
  const { pickColor } = useContext(ColorContext);
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];

  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => pickColor(color)}
        />
      ))}
    </div>
  );
}

function Pixel() {
  const { color } = useContext(ColorContext);
  const [pixelColor, setPixelColor] = useState("lightGrey");
  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: pixelColor,
        margin: "1px",
      }}
      onClick={() => {
        setPixelColor(color);
      }}
    />
  );
}

function Pixels() {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}
