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

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="weather-forecast">
      <div className="weather-forecast-date"> {day()}</div>
      <div>
        <img src={props.data.icon} alt="Description of weather" />
      </div>
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

//<WeatherIcon code={props.data.weather[0].icon} />