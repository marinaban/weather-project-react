import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import BackgroundImg from "./img/BeFunky4.jpg";
import Spinner from "./Spinner";
import WeatherInfo from "./WeatherInfo";
import "./App.css";
import Forecast from "./Forecast";

function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Port-au-Prince");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
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
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="row">
          <div className="col">
            <header className="title"> Hover me weather forecast</header>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group rounded w-50">
                <input
                  type="search"
                  className="form-control rounded search"
                  placeholder="Enter a city..."
                  style={{
                    backgroundColor: "rgba(114, 113, 109, 0.308)",
                    color: "rgba(255, 255, 225, 1)",
                    textShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    boxShadow:
                      "0px 0px 5px rgba(0,0,0,0.2), inset 3px 3px 7px rgba(0,0,0,0.5)",
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
                    textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
                  }}
                />
              </div>
            </form>
          </div>
          <WeatherInfo info={weatherData} />
          <Forecast coordinates={weatherData.coordinates} />
          <footer>
            <div className="rotate">
              Coded by Marina Banić:
              <a
                href="https://github.com/marinaban/weather-project-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                GitHub
              </a>{" "}
              /{" "}
              <a
                href="https://tubular-gumption-719cfd.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netlify
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  } else {
    search();

    return <Spinner />;
  }
}

export default App;
