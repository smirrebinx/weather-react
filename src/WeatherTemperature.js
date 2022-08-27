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
        <div class="float-left">
          <div className="temp-unit">
            <span className="currentDegree">{Math.round(props.celsius)}</span>
            <span className="unit-link units active">
              {" "}
              C°|
              <a href="/" className="unit-link" onClick={showFahrenheit}>
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div class="float-left">
          <div className="temp-unit">
            <span className="currentDegree">{Math.round(fahrenheit())}</span>
            <span className="unit-link units active">
              {" "}
              <a href="/" className="unit-link" onClick={showCelsius}>
                °C|
              </a>
            </span>
            <span className="unit-link units active">°F</span>
          </div>
        </div>
      </div>
    );
  }
}
