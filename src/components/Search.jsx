import React, { useState } from "react";

const Search = ({ getCityWeather }) => {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    getCityWeather(city);
    setCity("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
      />
      <button className="btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
