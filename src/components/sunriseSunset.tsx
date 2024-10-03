import React from 'react';
import { WeatherSys } from '../types/weatherTypes';
import useUnixTimestamp from '../hooks/useUnixTimestamp';
import HalfArcSvg from './halfArcSvg';
import { iconURL } from '../constants';

type WeatherSysProps = {
  weatherSys: WeatherSys;
};

export const SunriseSunset: React.FC<WeatherSysProps> = ({ weatherSys }) => {
  const { time: sunriseTime } = useUnixTimestamp(weatherSys.sunrise);
  const { time: sunsetTime } = useUnixTimestamp(weatherSys.sunset);

  const now = new Date();
  const hours = now.getHours();

  return (
    <div className="p-5 bg-white bg-opacity-55 flex flex-col items-center justify-center text-slate-600 rounded-md  ">
      <div className="arc-container w-full w-min-[300px] h-[150px] relative flex flex-col items-center">
        <HalfArcSvg className="text-white"></HalfArcSvg>
        <div className="w-full relative  border-t border-t-white z-2 flex flex-col ">
          <div className="flex justify-between">
            <small>sunrise</small>
            <small>sunset </small>
          </div>
          <div className="flex justify-between ">
            <p>{sunriseTime}</p>
            <p> {sunsetTime}</p>
          </div>
        </div>
        <img
          className={`w-8 h-8 relative bottom-[43%] left-[-44%] ${hours >= 0 && hours < 10 ? 'animate-sunrise' : 'animate-sunset'}`}
          src={`${iconURL}/01d.png`}
          alt="sun"
        />
      </div>
    </div>
  );
};
