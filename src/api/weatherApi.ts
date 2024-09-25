import axios from 'axios';
import { ForecastResponse, WeatherData } from '../types/weatherTypes';

const baseURL = 'https://api.openweathermap.org/data/2.5';

const weatherApi = axios.create({
  baseURL,
  params: {
    appid: import.meta.env.VITE_WEATHER_API_KEY,
  },
});

export const getWeatherByCity = async (city: string) => {
  const response = await weatherApi.get<WeatherData>('/weather', {
    params: {
      q: city,
      units: 'metric',
    },
  });
  return response.data;
};

export const getForecastByCity = async (city: string) => {
  const response = await weatherApi.get<ForecastResponse>('/forecast', {
    params: {
      q: city,
      units: 'metric',
    },
  });
  return response.data;
};
