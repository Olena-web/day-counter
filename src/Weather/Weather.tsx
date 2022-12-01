import React from 'react';
import {useEffect, useState} from 'react';
import { ApyData } from '../type';
import './Weather.css';

export  const Weather = (city: string) => {
  const [weather, setWeather] = React.useState({} as ApyData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=bcc33196cdb4397674f34d818b09afee&units=metric`)

      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        setWeather(data);
        setIsLoading(false);
      })
      .catch(error => setError(error));
  }, [city]);

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <p>Weather in {city}: </p>
      <div className="weather">
      <input type="text" className="city" placeholder="" />
      <i className='me'></i>
      <i className={ `weather-icon owf owf-${weather.weather[0].id}-d`}></i>
      <div className="weather_error"></div>

    <div className="description-container">
      <div className="temperature">
      t {Math.round(weather.main.temp)} °C
      </div>
      <div className="weather-description">
        {weather.weather[0].description}
      </div>
    </div>
    <div className="wind">
    wind : speed {Math.round(weather.wind.speed)} m/s
    </div>
    <div className="humidity">
    humidity: {Math.round(weather.main.humidity)} %
    </div>
      </div>
    </div>
  );
};


  export default Weather;
