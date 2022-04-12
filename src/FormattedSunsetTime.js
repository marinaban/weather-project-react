import React from "react";

export default function FormattedSunsetTime(props) {
  let hours = props.sunset.getHours();
  let minutes = props.sunset.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}
