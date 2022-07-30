import React, { useState } from "react";

export default function Search(props) {
  let [temperature, setTemperature] = useState("");
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCity(event.target.value);
    setTemperature(`It is currently ${props.temperature}°C in ${city}`);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div>
      <form
        className="search-form"
        onSubmit={handleSubmit}
        onChange={updateCity}
      >
        <div className="col-md-12 align-items-center"></div>
        <div className="row">
          <div className="col-md-8 align-items-center">
            <div className="input-form">
              <input
                type="search"
                placeHolder="Search for a city"
                className="form-control input-search"
              />
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-outline-secondary shadow-sm search-button"
              />
            </div>
          </div>
          <div className="col-sm-2 align-items-center"></div>
        </div>
      </form>
      <h2 className="city-heading">{temperature}</h2>
    </div>
  );
}
