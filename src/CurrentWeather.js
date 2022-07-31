import React from "react";

export default function CurrentWeather() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6 icon d-flex align-items-center text-center">
          <div className="clearfix weather-temperature">
            <img src="" alt="" className="float-left" />
            <div className="float-left">
              <div className="temp-unit">
                <span className="currentDegree"></span>
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
    </div>
  );
}
