import React from "react";
import leaf from "./images/leaf.png";

export default function Header() {
  return (
    <div className="App">
      <div class="container">
        <h1>Weather</h1>
        <div class="col-md-12 align-items-center">
          <img
            className="img-fluid d-block leaf-img"
            src={leaf}
            alt="An illustration of a leaf"
          />
        </div>
      </div>
    </div>
  );
}
