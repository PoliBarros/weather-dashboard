import { useState, useEffect } from 'react';
import { getWeatherByCity, getForecastByCity } from '../api/weatherApi';
import { WeatherData } from '../types/weatherTypes';
import { ForecastResponse } from '../types/forecastTypes';

export const useWeatherData = (city: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const weather = await getWeatherByCity(city);
        const forecast = await getForecastByCity(city);
        setWeatherData(weather);
        setForecastData(forecast);
      } catch (err) {
        setError(`Failed to fetch data:${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { weatherData, forecastData, loading, error };
};
