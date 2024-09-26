import { useCallback, useState } from 'react';

import './App.css';
import WeatherCard from './components/weatherCard';
import { useWeatherData } from './hooks/useWeatherData';
import { SearchBar } from './components/searchBar';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('Toronto'); // To store the city entered by the user
  const { weatherData, loading, error } = useWeatherData(city);

  const handleSearch = useCallback((newCity: string) => {
    setCity(newCity); // Update the city state, which will trigger the API fetch in useWeatherData
  }, []);

  return (
    <main className="flex flex-col gap-3 p-10">
      <SearchBar onSearch={handleSearch} />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </main>
  );
};

export default App;
