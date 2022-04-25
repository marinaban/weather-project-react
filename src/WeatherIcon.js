import React from "react";

export default function WeatherIcon(props) {
  return (
    <img
      className="image"
      src={props.code.icon}
      alt={props.code.description}
      width="20"
    />
  );
}
