import React, { useEffect, useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function callApi() {
    const apiKey = "a8c21df111443a41d8a63f0cde70ef6b";
    let units = "metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="forecast">
        <div className="container">
          <div className="row row-cols-auto">
            {forecast.map((dailyForecast, index) => {
              if (index < 6) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay day={dailyForecast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    callApi();

    return "<Spinner />";
  }
}
