import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WeatherCard from './components/weatherCard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="m-8">
      <WeatherCard city="Toronto" />
    </main>
  );
}

export default App;
