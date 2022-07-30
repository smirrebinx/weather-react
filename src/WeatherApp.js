import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";

export default function Challenge() {
  return (
    <div className="container">
      <div className="weather-container">
        <Header />
        <CurrentWeather />
        <Search temperature={20} />
        <div>
          <div className="col text-center">
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
      <div className="col"></div>
      <Footer />
    </div>
  );
}
