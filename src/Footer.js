import React from "react";
import a_cat from "./images/a_cat.jpg";

export default function Footer() {
  return (
    <div className="App">
      <footer className="footer">
        <div className="logo">
          <img src={a_cat} alt="Logo, black cat" />
          <small>
            <a
              href="https://github.com/smirrebinx/weather-react.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open source code
            </a>
            <span className="logoTextSpan">by Michelle Wegler</span>
          </small>
        </div>
      </footer>
    </div>
  );
}
