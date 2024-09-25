import React, { useState } from "react";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";

const App = () => {
  const [weather, setWeather] = useState(null);

  function getCityWeather(city) {
    const weatherApiKey = "8408504dc56d7fe2a397a7cb2b2b7e37";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`;

    fetch(weatherUrl)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="main-app">
      <h1 className="title">Search City</h1>
      <Search getCityWeather={getCityWeather} />
      <WeatherInfo weather={weather} />
    </div>
  );
};

export default App;
