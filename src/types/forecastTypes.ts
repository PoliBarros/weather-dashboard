export type ForecastMain = {
  temp: number; // Forecasted temperature
  feels_like: number; // Forecasted "feels like" temperature
  temp_min: number; // Minimum forecasted temp
  temp_max: number; // Maximum forecasted temp
  humidity: number; // Humidity percentage
};

export type ForecastWeather = {
  description: string; // Weather description, e.g., "rain"
  icon: string; // Icon to represent the forecast
};

export type ForecastWind = {
  speed: number; // Wind speed
  deg: number; // Wind direction in degrees
};

export type ForecastDataPoint = {
  dt: number; // Forecast time (Unix timestamp)
  main: ForecastMain; // Main forecasted weather details
  weather: ForecastWeather[]; // Array of weather descriptions
  wind: ForecastWind; // Wind data
};

export type ForecastResponse = {
  list: ForecastDataPoint[]; // Array of forecast data points
  city: {
    name: string; // City name
    country: string; // Country code
  };
};
