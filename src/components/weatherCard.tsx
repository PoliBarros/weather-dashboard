import React from 'react';
import { useWeatherData } from '../hooks/useWeatherData';

type WeatherCardProps = {
  city: string;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ city }) => {
  const { weatherData, forecastData, loading, error } = useWeatherData(city);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="weather-card">
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      )}
      {forecastData && (
        <div>
          <h3>Forecast</h3>
          {forecastData.list.slice(0, 3).map((item) => (
            <div key={item.dt}>
              <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
              <p>{item.main.temp}°C</p>
              <p>{item.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
