import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faEye, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from '../types/weatherTypes';

type weatherDataProps = {
  weatherData: WeatherData;
};

const WeatherCard: React.FC<weatherDataProps> = ({ weatherData }) => {
  const iconURL = 'http://openweathermap.org/img/wn';
  const today = new Date();
  const optionsWeekday: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const optionsDate: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };

  const formattedDate = `${today.toLocaleDateString('en-US', optionsWeekday)} - ${today.toLocaleDateString('en-US', optionsDate)}`;

  const classifyVisibility = (visibility: number) => {
    if (visibility >= 10000) return 'Unlimited';
    if (visibility >= 8000) return 'High';
    if (visibility >= 4000) return 'Moderate';
    return 'Low';
  };

  return (
    <div className="weather-card">
      {weatherData && (
        <div className="min-w-[300px] lg:max-w-[350px] font-bold antialiased text-slate-50 rounded-md bg-gradient-to-b from-sky-100 to-sky-600 shadow-xl  p-4">
          <h2 className="text-3xl  text-sky-600">{weatherData.name} </h2>
          <p className="text-sm font-bold">{formattedDate} </p>
          <div className="flex flex-col items-center justify-center  ">
            <p className="capitalize relative top-[50px] font-extrabold text-md">
              {weatherData.weather[0].main}
            </p>
            <img
              src={`${iconURL}/${weatherData.weather[0].icon}@4x.png`}
              alt={weatherData.weather[0].description}
            />
            <p className="relative top-[-50px] text-5xl ">{Math.round(weatherData.main.temp)}°C</p>
            <p className="relative top-[-45px] text-sm">
              Feels-like: {Math.round(weatherData.main.feels_like)}°C
            </p>
          </div>

          <div className="flex gap-1 justify-between mt-1">
            <p className="flex flex-col gap-1 items-center">
              <FontAwesomeIcon className="w-4 h-4 text-white" icon={faDroplet} />
              {weatherData.main.humidity}% <small>Humidity</small>
            </p>
            <p className="flex flex-col gap-1 items-center border-x px-4 border-sky-600">
              <FontAwesomeIcon className="w-4 h-4 text-white" icon={faEye} />
              {classifyVisibility(weatherData.visibility)}
              <small>Visibility</small>
            </p>
            <p className="flex flex-col  gap-1 items-center">
              <FontAwesomeIcon className="w-4 h-4 text-white" icon={faWind} />
              {weatherData.wind.speed} m/s
              <small>Wind</small>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
