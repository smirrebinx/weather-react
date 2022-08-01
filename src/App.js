import React from "react";
import WeatherApp from "./WeatherApp";
import "./App.css";
import background from "./images/background.jpg";

export default function App() {
  return (
    <div className="App">
      <div
        className="container"
        style={{ backgroundImage: `url(${background})` }}
      >
        <WeatherApp />
      </div>
    </div>
  );
}
