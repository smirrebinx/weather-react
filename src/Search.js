import React, { useState } from "react";
import axios from "axios";
import weather from "./images/weather.png";

export default function Search() {
  const [city, setCity] = useState(false);
  const [submit, setSubmit] = useState("");
  const [message, setMessage] = useState("");

  function showWeather(response) {
    setSubmit(true);
    setMessage({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiKey = "f74f9f2338bf06af72a7c11d8921c9c0";
    let unit = "metric";
    let apiUrl = `${apiEndpoint}q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(`${apiUrl}`).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (submit) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit} onChange={updateCity}>
          <div className="row">
            <div className="col-md-8 align-items-center">
              <div className="input-form">
                <input
                  type="search"
                  placeholder="Search for a city"
                  className="form-control input-search"
                />
              </div>
            </div>
            <div className="col-sm-2 align-items-center">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-outline-secondary shadow-sm search-button"
              />
            </div>
          </div>
        </form>
        <h2 className="city-heading">{city}</h2>
        <ul className="location-description-list">
          <li className="description">{message.description}</li>
        </ul>
        <div className="row">
          <div className="col-md-6 icon d-flex align-items-center text-center">
            <div className="clearfix weather-temperature">
              <img
                src={message.icon}
                alt="Description of weather"
                className="float-left"
              />
              <div className="float-left">
                <div className="temp-unit">
                  <span className="currentDegree">{message.temperature}</span>
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
        </div>
        <div className="col-md-3 text-center">
          <ul className="humid-wind-list">
            <li>
              <span id="humidity">Humidity: {message.humidity}%</span>
            </li>
            <li>
              <span id="wind">Wind: {message.wind} km/h</span>
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
    );
  } else {
    return (
      <div className="container">
        <form onSubmit={handleSubmit} onChange={updateCity}>
          <div className="form-container">
            <div className="col-md-12 align-items-center">
              <div className="row">
                <div className="col-md-8 align-items-center">
                  <div className="input-form">
                    <input
                      type="search"
                      placeholder="Enter a city..."
                      className="form-control input-search"
                    />
                    <input
                      type="submit"
                      value="Search"
                      className="form-control btn btn-outline-secondary shadow-sm search-button"
                    />
                  </div>
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
        </form>
      </div>
    );
  }
}
