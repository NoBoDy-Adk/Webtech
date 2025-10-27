import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.main) return null;

  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="weather-container">
      {/* === Top Section === */}
      <div className="weather-header">
        <h2>📍 {weather.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p className="description">{weather.weather[0].description}</p>
      </div>

      {/* === Grid of Info Cards === */}
      <div className="weather-grid">
        <div className="info-card">
          <h3>🌡️ Temperature</h3>
          <p className="value">{weather.main.temp.toFixed(2)}°C</p>
          <p>
            Min: {weather.main.temp_min.toFixed(2)}°C | Max:{" "}
            {weather.main.temp_max.toFixed(2)}°C
          </p>
        </div>

        <div className="info-card">
          <h3>💧 Humidity</h3>
          <p className="value">{weather.main.humidity}%</p>
        </div>

        <div className="info-card">
          <h3>🌬️ Wind Speed</h3>
          <p className="value">{weather.wind.speed} m/s</p>
        </div>

        <div className="info-card">
          <h3>🌅 Sunrise & Sunset</h3>
          <p>Sunrise: {sunrise}</p>
          <p>Sunset: {sunset}</p>
        </div>

        <div className="info-card">
          <h3>☁️ Clouds</h3>
          <p className="value">{weather.clouds.all}% Cloudiness</p>
        </div>

        <div className="info-card">
          <h3>🌧️ Rain</h3>
          <p className="value">
            {weather.rain ? `${weather.rain["1h"]} mm/h` : "No rain"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
