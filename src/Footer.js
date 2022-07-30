import React from "react";
import a_cat from "./images/a_cat.jpg";

export default function Footer() {
  return (
    <div className="App">
      <footer id="footer">
        <div className="logo">
          <small>
            <a
              href="https://github.com/smirrebinx/vanilla-weather-app.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open source code
            </a>
            <span className="logoTextSpan">by </span>
            <img src={a_cat} alt="Logo, black cat" />
            <span className="logoTextSpan">Michelle Wegler</span>
          </small>
        </div>
      </footer>
    </div>
  );
}
