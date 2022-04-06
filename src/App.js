import React from "react";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BackgroundImg from "./img/anime.jpg";

function App() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url("${BackgroundImg}")`,
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <header className="title"> Magic weather forecast</header>
            <Form />
          </div>
          <div className="row">
            <div className="col-6">
              <h1>Split</h1>
              <h2> "img" 17°C</h2>
              <p>overcast clouds</p>
            </div>
            <div className="col-6">
              <div className="row">
                {" "}
                <div className="col-4">
                  <p>16° High</p>
                </div>
                <div className="col-4">
                  <p>3.1mph Wind</p>
                </div>
                <div className="col-4">
                  <p>20:18 Sunset</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <p>6° Low</p>
                </div>
                <div className="col-4">
                  <p>20% Humidity</p>
                </div>
                <div className="col-4">
                  <p>07:00 Sunrise</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Forecast</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
