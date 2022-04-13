import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function handleFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function handleCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperatureNumber">{Math.round(props.celsius)}</span>
        <span className="units">
          {" "}
          °C |
          <a href="/" onClick={handleFahrenheit} className="unit">
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperatureNumber">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={handleCelsius} className="unit">
            °C
          </a>
          |°F
        </span>
      </span>
    );
  }
}
