import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Search(props) {
  const [submit, setSubmit] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setSubmit({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
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
    const apiKey = "88ee6169873d6d2e07af4c35247ba163";
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
            <div className="col-9 input-form">
              <input
                type="search"
                placeholder="Search for a city..."
                className="form-control input-search"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-outline-secondary shadow-sm search-button"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={submit} />
        <WeatherForecast coordinates={submit.coordinates} />
      </div>
    );
  } else {
    search();
    return "Please wait";
  }
}
