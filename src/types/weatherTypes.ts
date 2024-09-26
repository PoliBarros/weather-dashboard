export type WeatherMain = {
  temp: number; // Current temperature
  feels_like: number; // What it feels like
  temp_min: number; // Minimum temp for the day
  temp_max: number; // Maximum temp for the day
  humidity: number; // Humidity percentage
};

export type WeatherCondition = {
  main: string; // e.g., "clear sky"
  description: string; // Detailed main description
  icon: string; // Weather icon
};

export type WeatherWind = {
  speed: number; // Wind speed in meters/second
  deg: number; // Wind direction in degrees
};

export type WeatherSys = {
  country: string; // Country code, e.g., "US"
  sunrise: number; // Sunrise time (Unix timestamp)
  sunset: number; // Sunset time (Unix timestamp)
};

export type WeatherData = {
  name: string; // City name
  main: WeatherMain; // Main weather data (temperature, etc.)
  weather: WeatherCondition[]; // Array of weather conditions
  wind: WeatherWind; // Wind data
  sys: WeatherSys; // System data (country, sunrise, sunset)
  visibility: number; // Visibility quality
};
