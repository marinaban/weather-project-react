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
        °C |
        <a href="/" onClick={handleFahrenheit} className="unit">
          °F
        </a>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperatureNumber">{Math.round(fahrenheit)}</span>
        <a href="/" onClick={handleCelsius} className="unit">
          °C
        </a>
        |°F
      </span>
    );
  }
}
