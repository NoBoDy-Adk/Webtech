import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import "./index.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error:", error);
      alert("City not found or API error");
    }
  };

  return (
<div className="app-container">
  <h1>🌞 Weather Dashboard</h1>

  <div className="search-container">
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city..."
    />
    <button onClick={fetchWeather}>Search</button>
  </div>

  {weather && (
    <>
      <div className="weather-header">
        <h2>📍 {weather.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="icon"
        />
        <p>{weather.weather[0].description}</p>
      </div>

      <div className="weather-grid">
        <div className="info-card">
          <h3>🌡️ Temperature</h3>
          <p className="value">{weather.main.temp}°C</p>
        </div>

        <div className="info-card">
          <h3>💧 Humidity</h3>
          <p className="value">{weather.main.humidity}%</p>
        </div>

        <div className="info-card">
          <h3>💨 Wind Speed</h3>
          <p className="value">{weather.wind.speed} m/s</p>
        </div>

        <div className="info-card">
          <h3>🌅 Sunrise</h3>
          <p className="value">{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
        </div>

        <div className="info-card">
          <h3>🌇 Sunset</h3>
          <p className="value">{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>

        <div className="info-card">
          <h3>☁️ Clouds</h3>
          <p className="value">{weather.clouds.all}% Cloudiness</p>
        </div>
      </div>
    </>
  )}
</div>

  );
};

export default App;
