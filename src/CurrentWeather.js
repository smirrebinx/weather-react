import React from "react";
import weather from "./images/weather.png";

export default function CurrentWeather() {
  return (
    <div className="App">
      <ul className="location-description-list">
        <li id="local-time">Sunday 10:51</li>
        <li id="description">Overcast clouds</li>
      </ul>
      <div className="row">
        <div className="col-md-6 icon d-flex align-items-center text-center">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Description of weather"
              id="icon"
              className="float-left"
            />
            <div className="float-left">
              <div className="temp-unit">
                <span className="currentDegree" id="currentDegree"></span>
                <span className="units">
                  <a href="/" id="celsius-link" className="active">
                    18°C
                  </a>{" "}
                  |
                  <a href="/" id="fahrenheit-link">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <ul className="humid-wind-list">
            <li>
              Humidity: 70<span id="humidity"></span>%
            </li>
            <li>
              Wind: 5<span id="wind"></span> m/s
            </li>
          </ul>
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
