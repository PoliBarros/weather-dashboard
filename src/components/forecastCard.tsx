import React from 'react';
import { ForecastDataPoint, ForecastResponse } from '../types/forecastTypes';

type ForecastDataPointProps = {
  forecastData: ForecastResponse;
};

export const ForecastCard: React.FC<ForecastDataPointProps> = ({ forecastData }) => {
  const iconURL = 'http://openweathermap.org/img/wn';
  const formattedData = (dt: string) => {
    return dt.split(' ')[0];
  };
  //Select daily data picking a single forecast - around noon
  const dailyForecasts = forecastData.list.reduce(
    (acc, item) => {
      const itemDate = formattedData(item.dt_txt);

      if (!acc[itemDate]) {
        acc[itemDate] = [];
      }

      // Add the current item to the array for the given date
      acc[itemDate].push(item);

      return acc;
    },
    {} as { [key: string]: ForecastDataPoint[] },
  );

  console.log(dailyForecasts);

  return (
    <div className="w-full max-w-[520px] antialiased font-bold  bg-white bg-opacity-55 p-4 text-slate-600 shadow-xl rounded-md flex-grow">
      <h3 className="border-b border-b-sky-100 pb-1">Next 5 days</h3>
      <div className="flex flex-col mt-2 justify-evenly h-[90%] ">
        {/* skipping todays forecast */}
        {Object.entries(dailyForecasts)

          .map(([date, forecasts]) => {
            const fmtDate = new Date(forecasts[0].dt_txt);
            const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(fmtDate);
            const lastForecastData = forecasts.length - 1;

            return (
              <div className="flex items-center justify-between " key={forecasts[0].dt}>
                <small className="sm:w-36 flex flex-nowrap">
                  {dayOfWeek}
                  <span className="hidden sm:block">
                    - {fmtDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}
                  </span>
                </small>

                <img
                  src={`${iconURL}/${forecasts[0].weather[0].icon}.png`}
                  alt={forecasts[0].weather[0].description}
                />
                <img
                  src={`${iconURL}/${forecasts[lastForecastData].weather[0].icon}.png`}
                  alt={forecasts[lastForecastData].weather[0].description}
                />
                <small className="">
                  {`${Math.round(forecasts[0].main.temp_min)}°C / ${Math.round(forecasts[lastForecastData].main.temp_max)}°C`}
                </small>
              </div>
            );
          })}
      </div>
    </div>
  );
};
