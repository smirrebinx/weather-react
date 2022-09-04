import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function forecastIcon() {
    let icon = `https://openweathermap.org/img/wn/${props.data.icon}@2x.png`;
    return `${icon}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="weather-forecast">
      <div className="weather-forecast-date"> {day()}</div>
      <img src={forecastIcon()} alt="Description of weather" width="54"></img>
      <div>
        <span className="weather-forecast-temperature weather-forecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weather-forecast-temperature weather-forecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
