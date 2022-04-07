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
            <header className="title"> Magical weather forecast</header>
            <Form />
          </div>
          <div className="row">
            <div className="col-6">
              <h1>Split</h1>
              <h2> "img" 17°C</h2>
              <p>overcast clouds</p>
            </div>

            <div className="col-6 detailColumn">
              <div className="row">
                <div className="col-4 singles ">
                  <p>
                    16° <div>High</div>
                  </p>
                </div>
                <div className="col-4 singles">
                  <p>
                    3.1mph <div>Wind</div>
                  </p>
                </div>
                <div className="col-4 singles">
                  <p>
                    20:18 <div>Sunset</div>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 singles">
                  <p>
                    6° <div>Low</div>
                  </p>
                </div>
                <div className="col-4 singles">
                  <p className="humidity">
                    20% <div>Humidity</div>
                  </p>
                </div>
                <div className="col-4 singles">
                  <p>
                    07:00 <div>Sunrise</div>
                  </p>
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
