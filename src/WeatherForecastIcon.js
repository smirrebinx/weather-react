import React from "react";
import clearDay from "./images/clearDay.png";
import rain from "./images/rain.png";
import snow from "./images/snow.png";

export default function WeatherForecastIcon(props) {
  const codeMapping = {
    clearDay: "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    rain: "RAIN",
    rain: "RAIN",
    rain: "RAIN",
    rain: "RAIN",
    rain: "RAIN",
    rain: "RAIN",
    snow: "SNOW",
    snow: "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return <clearClouds icon={codeMapping[props.code]} size={props.size} />;
}
