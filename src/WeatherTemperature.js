import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="currentDegree">{Math.round(props.celsius)}</span>{" "}
        <span className="celsius-link"> C° |</span>
        <span className="fahrenheit-link">
          {" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="currentDegree">{Math.round(fahrenheit())}</span>{" "}
        <span className="celsius-link">
          {" "}
          <a href="/" onClick={showCelsius}>
            {" "}
            °C
          </a>{" "}
        </span>{" "}
        <span className="fahrenheit-link"> °F</span>
      </div>
    );
  }
}
