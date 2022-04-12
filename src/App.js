import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import BackgroundImg from "./img/anime.jpg";
import Spinner from "./Spinner";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Port-au-Prince");

  function handleResponse(response) {
    console.log(response.data);
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
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "a8c21df111443a41d8a63f0cde70ef6b";
    let units = "metric";
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
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group rounded w-50">
                <input
                  type="search"
                  className="form-control rounded search"
                  placeholder="Enter a city..."
                  style={{
                    backgroundColor: "rgba(114, 113, 109, 0.308)",
                    color: "rgba(255, 255, 225, 0.823)",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    boxShadow:
                      "1px 1px 20px rgba(0,0,0,0.6), inset 2px 2px 7px rgba(0,0,0,0.5)",
                  }}
                  onChange={handleCityChange}
                />
                <input
                  type="submit"
                  className="btn btn-link button"
                  value="Search"
                  style={{
                    textDecoration: "none",
                    color: "rgba(255, 255, 0, 0.723)",
                    textShadow: "3px 3px rgba(0,0,0,0.3)",
                  }}
                />
              </div>
            </form>
          </div>
          <WeatherInfo info={weatherData} />
          <div className="row">
            <div className="col forecast">
              <h3>Forecast</h3>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return <Spinner />;
  }
}

export default App;
