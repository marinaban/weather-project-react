import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function forecastDays() {
    let date = new Date(props.day.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurdsay",
      "Friday",
      "Saturday",
    ];
    return `${days[day]}`;
  }
  function temperatureDay() {
    return `${Math.round(props.day.temp.day)}`;
  }

  return (
    <div className="box">
      <h5>{forecastDays()}</h5>
      <div className="content">
        <WeatherIcon code={props.day.weather[0]} size={30} />
        <p className="temperature">{temperatureDay()}°C</p>
      </div>
    </div>
  );
}
