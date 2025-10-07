import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./redux/WeatherSlice";

const Weather = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.weather);

  const handleSearch = () => {
    if (city) {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div className="weather">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Get Weather</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && (
        <div>
          <h2>{data.location.name}</h2>
          <p>{data.current.temp_c}°C</p>
          <p>{data.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
