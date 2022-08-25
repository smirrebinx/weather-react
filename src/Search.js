import React, { useState } from "react";
import axios from "axios";
import weather from "./images/weather.png";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [submit, setSubmit] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setSubmit({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "f74f9f2338bf06af72a7c11d8921c9c0";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    let unit = "metric";
    let apiUrl = `${apiEndpoint}q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(`${apiUrl}`).then(showWeather);
  }

  if (submit.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
          <h2 className="city-heading"></h2>
          <ul className="location-description-list">
            <li className="description"></li>
          </ul>
          <div className="row">
            <div className="col-md-6 icon d-flex align-items-center text-center">
              <div className="clearfix weather-temperature">
                <div className="float-left">
                  <div className="temp-unit">
                    <span className="currentDegree"></span>
                    <span className="units"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <ul className="humid-wind-list">
                <li>
                  <span className="humidity"></span>
                </li>
                <li>
                  <span className="wind"></span>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <img
                className="img-fluid d-block weather-img"
                src={weather}
                alt="A person pointing to a weather forecast"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={submit} />
      </div>
    );
  } else {
    search();
    return "Please wait";
  }
}
