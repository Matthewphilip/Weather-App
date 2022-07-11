import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecasts }) {
  const { date, temperature, humidity, wind, description } = forecasts;
  const formattedDate = new Date(date).toDateString();
  let windDirection = "";
  const { direction } = wind;

  if (direction === "n") {
    windDirection = "North";
  } else if (direction === "nne") {
    windDirection = "North North-East";
  } else if (direction === "ne") {
    windDirection = "North East";
  } else if (direction === "ene") {
    windDirection = "East North-East";
  } else if (direction === "e") {
    windDirection = "East";
  } else if (direction === "ese") {
    windDirection = "East South-East";
  } else if (direction === "se") {
    windDirection = "South East";
  } else if (direction === "sse") {
    windDirection = "South South-East";
  } else if (direction === "s") {
    windDirection = "South";
  } else if (direction === "ssw") {
    windDirection = "South South-West";
  } else if (direction === "sw") {
    windDirection = "South West";
  } else if (direction === "wsw") {
    windDirection = "West South-West";
  } else if (direction === "w") {
    windDirection = "West";
  } else if (direction === "wnw") {
    windDirection = "West North-West";
  } else if (direction === "nw") {
    windDirection = "North West";
  } else {
    windDirection = "North North-West";
  }

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__description">
        Conditions: {description}
      </div>
      <div className="forecast-details__maxTemp">
        Max Temperature: {temperature.max} &deg;C
      </div>
      <div className="forecast-details__minTemp">
        Min Temperature: {temperature.min} &deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}</div>
      <div className="forecast-details__windSpeed">
        Wind Speed: {wind.speed} MPH
      </div>
      <div className="forecast-details__windDirection">
        Wind Direction: {windDirection}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,

    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,

    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
