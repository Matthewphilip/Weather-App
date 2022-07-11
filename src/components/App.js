import "../styles/App.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  const { city, country } = location;
  const [selectedDate, setselectedDate] = useState(forecasts[0].date);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setselectedDate(date);
  };

  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      <ForecastDetails forecasts={selectedForecast} />
    </div>
  );
}

export default App;

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,

  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      humidity: PropTypes.number.isRequired,

      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }).isRequired,

      wind: PropTypes.shape({
        speed: PropTypes.number,
        direction: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};
