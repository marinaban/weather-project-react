import React from "react";
import FormattedSunriseTime from "./FormattedSunriseTime";
import FormattedSunsetTime from "./FormattedSunsetTime";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-6 temperatureColumn">
        <h1>
          {props.info.city}{" "}
          <div className="date">
            <FormatDate date={props.info.date} />
          </div>
        </h1>
        <h2>
          <img
            className="img"
            src={props.info.icon}
            alt={props.info.description}
            width={120}
          />
          <WeatherTemperature celsius={props.info.temperature} />
        </h2>
        <p className="text-capitalize">{props.info.description}</p>
      </div>

      <div className="col-6 dataColumn">
        <div className="row">
          <div className="col-4 singles ">
            <div>
              {props.info.high}°C <div>High</div>
            </div>
          </div>
          <div className="col-4 singles">
            <div>
              {props.info.wind}km/h <div>Wind</div>
            </div>
          </div>
          <div className="col-4 singles">
            <div>
              <FormattedSunsetTime sunset={props.info.sunset} />
              <div>Sunset</div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4 singles">
            <div>
              {props.info.low}°C <div>Low</div>
            </div>
          </div>
          <div className="col-4 singles">
            <div className="humidity">
              {props.info.humidity}% <div>Humidity</div>
            </div>
          </div>
          <div className="col-4 singles">
            <div>
              <FormattedSunriseTime sunrise={props.info.sunrise} />
              <div>Sunrise</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
