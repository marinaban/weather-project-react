import React from "react";

export default function FormattedSunriseTime(props) {
  let hours = props.sunrise.getHours();
  let minutes = props.sunrise.getMinutes();

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
