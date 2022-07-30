import React from "react";
import leaf from "./images/leaf.png";

export default function Header() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <img
        className="img-fluid d-block"
        id="leaf-img"
        src={leaf}
        alt="An illustration of a leaf"
      />
    </div>
  );
}
