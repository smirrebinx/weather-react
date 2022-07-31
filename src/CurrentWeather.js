import React from "react";
import weather from "./images/weather.png";

export default function CurrentWeather() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6 icon d-flex align-items-center text-center">
          <div className="clearfix weather-temperature">
            <img src="" alt="" className="float-left" />
            <div className="float-left">
              <div className="temp-unit">
                <span className="currentDegree"></span>
                <span className="units">
                  <a href="/" className="celsius-link active">
                    °C
                  </a>{" "}
                  <a href="/" className="fahrenheit-link">
                    F
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid d-block"
            id="weather-img"
            src={weather}
            alt="A person pointing to a weather forecast"
          />
        </div>
      </div>
    </div>
  );
}
