import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function forecastDays() {
    let date = new Date(props.day.dt * 1000);
    let day = date.getDay();
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurdsay",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return `${days[day]}`;
  }
  function temperatureDay() {
    return `${Math.round(props.day.temp.day)}`;
  }

  return (
    <div>
      <div className="box">
        <h5>{forecastDays()}</h5>
        <div className="content">
          <ul>
            <li>
              <WeatherIcon
                src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
                alt={props.day.weather[0].description}
              />
            </li>
            <li>
              {" "}
              <p className="temperature">{temperatureDay()}°C</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
