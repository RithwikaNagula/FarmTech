import React, { useState } from 'react';
import './WeatherForecast.css';

const API_KEY = '1f93727ecde7e434b9f221eba0a7ff53';

const WeatherForecast = () => {
    const [cityName, setCityName] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);

    const createWeatherCard = (weatherItem) => (
        <div className="weather-card" key={weatherItem.dt}>
            <h3>{new Date(weatherItem.dt_txt).toLocaleDateString()}</h3>
            <img
                src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`}
                alt="weather icon"
            />
            <p>Temperature: {(weatherItem.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Wind: {weatherItem.wind.speed} m/s</p>
            <p>Humidity: {weatherItem.main.humidity}%</p>
        </div>
    );

    const getWeatherDetails = (lat, lon, city = '') => {
        const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        fetch(WEATHER_API_URL)
            .then(res => res.json())
            .then(data => {
                const uniqueForecastDays = [];
                const fiveDaysForecast = data.list.filter(forecast => {
                    const forecastDate = new Date(forecast.dt_txt).toDateString();
                    if (!uniqueForecastDays.includes(forecastDate)) {
                        uniqueForecastDays.push(forecastDate);
                        return true;
                    }
                    return false;
                });

                setWeatherData({
                    currentWeather: data.list[0],
                    forecast: fiveDaysForecast
                });
            })
            .catch(() => {
                alert('An error occurred fetching the weather forecast');
            });
    };

    const reverseGeocode = (lat, lon) => {
        const REVERSE_GEOCODE_URL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`;
        return fetch(REVERSE_GEOCODE_URL)
            .then(res => res.json())
            .then(data => data.address.city || data.address.town || data.address.village || 'Unknown location')
            .catch(() => 'Unknown location');
    };

    const getCurrentLocationWeather = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                const city = await reverseGeocode(latitude, longitude);
                setCurrentLocation(city);
                getWeatherDetails(latitude, longitude, city);
            }, () => {
                alert('Unable to retrieve your location');
            });
        } else {
            alert('Geolocation is not supported by this browser');
        }
    };

    const getCityCoordinates = () => {
        if (!cityName) return;

        const GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
        fetch(GEOCODING_API_URL)
            .then(res => res.json())
            .then(data => {
                if (!data.length) return alert(`No coordinates found for ${cityName}`);
                const { lat, lon } = data[0];
                getWeatherDetails(lat, lon, cityName);
            })
            .catch(() => {
                alert('An error occurred fetching the coordinates');
            });
    };

    return (
        <div className="weather-forecast-container">
            <h1>Weather Dashboard</h1>
            <div className="weather-input">
                <h3>Enter a City Name</h3>
                <input
                    type="text"
                    className="city-input"
                    placeholder="E.g. New York"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />
                <button className="search-btn" onClick={getCityCoordinates}>Search</button>
                <button className="location-btn" onClick={getCurrentLocationWeather}>Use Current Location</button>
            </div>
            {weatherData && (
                <div className="weather-data">
                    <div className="current-weather">
                        <div className="current-location">
                            <h2>Current Location: {currentLocation}</h2>
                            <h3>{new Date(weatherData.currentWeather.dt_txt).toLocaleDateString()}</h3>
                        </div>
                        <div className="current-weather-details">
                            <img
                                src={`https://openweathermap.org/img/wn/${weatherData.currentWeather.weather[0].icon}@4x.png`}
                                alt="weather icon"
                            />
                            <div>
                                <p>Temperature: {(weatherData.currentWeather.main.temp - 273.15).toFixed(2)}°C</p>
                                <p>Wind: {weatherData.currentWeather.wind.speed} m/s</p>
                                <p>Humidity: {weatherData.currentWeather.main.humidity}%</p>
                                <p>Description: {weatherData.currentWeather.weather[0].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="days-forecast">
                        <h2>5-Day Forecast</h2>
                        <div className="weather-cards">
                            {weatherData.forecast.map(createWeatherCard)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherForecast;
