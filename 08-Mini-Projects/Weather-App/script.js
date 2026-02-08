// Weather App using OpenWeatherMap API
// Note: You'll need to get a free API key from openweathermap.org

const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your API key
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherInfo = document.getElementById("weatherInfo");
const error = document.getElementById("error");

async function getWeather(city) {
  try {
    error.classList.add("hidden");
    weatherInfo.classList.add("hidden");
    
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error("City not found");
    }
    
    const data = await response.json();
    displayWeather(data);
  } catch (err) {
    error.textContent = err.message;
    error.classList.remove("hidden");
  }
}

function displayWeather(data) {
  document.getElementById("cityName").textContent = data.name;
  document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
  document.getElementById("description").textContent = data.weather[0].description;
  document.getElementById("humidity").textContent = `${data.main.humidity}%`;
  document.getElementById("windSpeed").textContent = `${data.wind.speed} m/s`;
  
  weatherInfo.classList.remove("hidden");
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value.trim();
    if (city) {
      getWeather(city);
    }
  }
});
