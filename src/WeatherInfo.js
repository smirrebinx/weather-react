import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import weather from "./images/weather.png";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <h2 className="city-heading">{props.data.city}</h2>
      <ul className="location-description-list">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="description">{props.data.description}</li>
      </ul>
      <div className="WeatherInfo">
        <div class="row">
          <div class="col-md-6 icon d-flex align-items-center text-center">
            <div className="clearfix weather-temperature">
              <img
                src={props.data.icon}
                alt="Description of weather"
                className="float-left"
              />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <ul className="humid-wind-list">
              <li>
                <span className="humidity">
                  Humidity: {props.data.humidity}%
                </span>
              </li>
              <li>
                <span className="wind">Wind: {props.data.wind} km/h</span>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <img
              className="img-fluid d-block weather-img"
              src={weather}
              alt="A person pointing to a weather forecast"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
