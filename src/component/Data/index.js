import React, { Fragment } from "react";
import "./style.css"

function Data({ weather }) {
  console.log(weather);
  const content =
    weather.name !== null ? (
      <div className="data">
        <h2>Name: {weather.name}</h2>
        <h3>Country: {weather.country}</h3>
        <h4>Description: {weather.desc}</h4>
        <h5>Temperature: {weather.temp}</h5>
        <h5>Humidity: {weather.humidity}</h5>
      </div>
    ) : weather.name === null ? (
      <p>{weather.error}</p>
    ) : (
      ""
    );
  return <Fragment>{content}</Fragment>;
}
export default Data;
