import React from "react";

export default function WeatherIcon(props) {
  return (
    <img
      className="image"
      src={props.src}
      alt={props.alt}
      width={80}
      height={80}
    />
  );
}
