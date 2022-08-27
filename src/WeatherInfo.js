import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import weather from "./images/weather.png";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="city-heading">{props.data.city}</h2>
      <ul className="location-description-list">
        <li className="description">{props.data.description}</li>
      </ul>
      <div className="d-flex weather-temperature">
        <img
          src={props.data.icon}
          alt="Description of weather"
          className="float-left"
        />
        <div className="float-left"></div>
      </div>
      <div>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div>
        <ul className="humid-wind-list">
          <li>
            <span className="humidity">Humidity: {props.data.humidity}%</span>
          </li>
          <li>
            <span className="wind">Wind: {props.data.wind} km/h</span>
          </li>
        </ul>
      </div>
      <img
        className="img-fluid d-block weather-img"
        src={weather}
        alt="A person pointing to a weather forecast"
      />
    </div>
  );
}
