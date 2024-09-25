import React from "react";

const WeatherInfo = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-info">
      <h2 className="city-name">{weather.name}</h2>
      <h4 className="country">{weather.sys.country}</h4>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather-icon"
        className="icon"
      />
      <h1 className="temp">{Math.round(weather.main.temp)}°C</h1>
      <p className="feels-like">
        Feels Like: {Math.round(weather.main.feels_like)}°C
      </p>
      <p className="wind-speed">
        Wind Speed: {Math.round(weather.wind.speed)} m/s
      </p>
    </div>
  );
};

export default WeatherInfo;
