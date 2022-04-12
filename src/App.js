import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import BackgroundImg from "./img/anime.jpg";
import Spinner from "./Spinner";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  function searchApi() {
    const apiKey = "a8c21df111443a41d8a63f0cde70ef6b";
    let units = "metric";
    let city = "Port-Au-Prince";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url("${BackgroundImg}")`,
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="row">
          <div className="col">
            <header className="title"> Anime weather forecast</header>
            <form className="form">
              <div className="input-group rounded w-50">
                <input
                  type="text"
                  className="form-control rounded search"
                  placeholder="Enter a city..."
                  style={{
                    backgroundColor: "rgba(114, 113, 109, 0.308)",
                    color: "rgba(255, 255, 225, 0.823)",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    boxShadow:
                      "1px 1px 20px rgba(0,0,0,0.6), inset 2px 2px 7px rgba(0,0,0,0.5)",
                  }}
                  autoFocus="on"
                />
                <button
                  type="submit"
                  className="btn btn-link"
                  style={{
                    textDecoration: "none",
                    color: "rgba(255, 255, 0, 0.723)",
                    textShadow: "3px 3px rgba(0,0,0,0.3)",
                  }}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 temperatureColumn">
              <h1>Port-Au-Prince</h1>
              <h2>
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="float-left"
                ></img>{" "}
                <span className="temperatureNumber">
                  {weatherData.temperature}
                </span>
                °C
              </h2>
              <p className="text-capitalize">{weatherData.description}</p>
            </div>

            <div className="col-6 dataColumn">
              <div className="row gy-3">
                <div className="col-4 singles ">
                  <div>
                    {weatherData.high}°C <div>High</div>
                  </div>
                </div>
                <div className="col-4 singles">
                  <div>
                    {weatherData.wind}km/h <div>Wind</div>
                  </div>
                </div>
                <div className="col-4 singles">
                  <div>
                    20:00
                    <div>Sunset</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4 singles">
                  <div>
                    {weatherData.low}°C <div>Low</div>
                  </div>
                </div>
                <div className="col-4 singles">
                  <div className="humidity">
                    {weatherData.humidity}% <div>Humidity</div>
                  </div>
                </div>
                <div className="col-4 singles">
                  <div>
                    07:00
                    <div>Sunrise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col forecast">
              <h3>Forecast</h3>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    searchApi();

    return <Spinner />;
  }
}

export default App;
