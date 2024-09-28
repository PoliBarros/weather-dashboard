import { useCallback, useState } from 'react';

import './App.css';
import WeatherCard from './components/weatherCard';
import { useWeatherData } from './hooks/useWeatherData';
import { SearchBar } from './components/searchBar';
import { ForecastCard } from './components/forecastCard';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('Toronto'); // To store the city entered by the user
  const { weatherData, forecastData, loading, error } = useWeatherData(city);

  const handleSearch = useCallback((newCity: string) => {
    setCity(newCity); // Update the city state, which will trigger the API fetch in useWeatherData
  }, []);

  return (
    <main className="flex justify-center gap-3 p-10 h-fit sm: flex-wrap">
      <div className="block sm:hidden">
        <SearchBar onSearch={handleSearch} />
      </div>
      {weatherData && <WeatherCard weatherData={weatherData} />}
      <div className="flex flex-col gap-3 min-w-[300px] ">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <div className="hidden md:block">
          <SearchBar onSearch={handleSearch} />
        </div>
        {forecastData && <ForecastCard forecastData={forecastData} />}
      </div>
    </main>
  );
};

export default App;
