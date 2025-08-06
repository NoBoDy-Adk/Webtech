const apiKey = '5cf55385fbe1209d9efa0aa2bd38ec21'; // ✅ Your actual API key

const cityInput = document.getElementById('city-input');
const btn = document.getElementById('get-weather-btn');
const weatherSection = document.getElementById('weather-section');
const errorMsg = document.getElementById('error-message');

btn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (!city) {
    showError('Please enter a city name.');
    return;
  }
  fetchWeather(city);
});

async function fetchWeather(city) {
  clearError();
  weatherSection.classList.add('hidden');

  try {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`);
    if (!resp.ok) throw new Error('City not found');
    const data = await resp.json();
    displayWeather(data);
  } catch (err) {
    showError(err.message);
  }
}

function displayWeather(data) {
  const { name } = data;
  const { temp, temp_min, temp_max, humidity } = data.main;
  const { main: weatherMain, icon } = data.weather[0];
  const wind = data.wind.speed;
  const rain = data.rain ? data.rain["1h"] + " mm" : "No rain";
  const sunrise = formatTime(data.sys.sunrise);
  const sunset = formatTime(data.sys.sunset);

  document.getElementById('location-card').innerHTML = `
    <h3>📍 Location</h3>
    <p><strong>${name}</strong></p>
    <p>${weatherMain} <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${weatherMain}"></p>
  `;

  document.getElementById('temp-card').innerHTML = `
    <h3>🌡️ Temperature</h3>
    <p><strong>Now:</strong> ${temp}°C</p>
    <p><strong>Min:</strong> ${temp_min}°C | <strong>Max:</strong> ${temp_max}°C</p>
  `;

  document.getElementById('humidity-card').innerHTML = `
    <h3>💧 Humidity</h3>
    <p>${humidity}%</p>
  `;

  document.getElementById('sun-card').innerHTML = `
    <h3>🌅 Sunrise & Sunset</h3>
    <p><strong>Sunrise:</strong> ${sunrise}</p>
    <p><strong>Sunset:</strong> ${sunset}</p>
  `;

  document.getElementById('wind-card').innerHTML = `
    <h3>🌬️ Wind Speed</h3>
    <p>${wind} m/s</p>
  `;

  document.getElementById('rain-card').innerHTML = `
    <h3>🌧️ Rain</h3>
    <p>${rain}</p>
  `;

  weatherSection.classList.remove('hidden');
}

function formatTime(unixSec) {
  const dt = new Date(unixSec * 1000);
  return dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function showError(msg) {
  errorMsg.textContent = msg;
  errorMsg.classList.remove('hidden');
}

function clearError() {
  errorMsg.textContent = '';
  errorMsg.classList.add('hidden');
}
