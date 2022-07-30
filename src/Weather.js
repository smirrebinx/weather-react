import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiKey = "f74f9f2338bf06af72a7c11d8921c9c0";
  let unit = "metric";
  let apiUrl = `${apiEndpoint}q=${props.city}&appid=${apiKey}&units=${unit}`;

  axios.get(`${apiUrl}`).then(handleResponse);
  return <h2>Weather App</h2>;
}
