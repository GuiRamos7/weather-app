import React from 'react';
import ReactCountryFlag from 'react-country-flag';

import { CardWeatherContainer } from './style';

const CardWeather = ({ icon, min, max, current, city, country }) => {
  return (
    <CardWeatherContainer>
      <div className='location-container'>
        <h1>{city}</h1>
        <ReactCountryFlag
          style={{
            fontSize: '3em',
          }}
          countryCode={country}
        />
      </div>
      <div className='weather-container'>
        <p className='current-weather'>{Math.round(current)}°C</p>
        <div>
          <p className='max-weather'>Max: {Math.round(max)}°C</p>
          <p className='min-weather'>Min: {Math.round(min)}°C</p>
        </div>
      </div>
      <div className='weather-icon'>
        <img
          src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`}
        />
      </div>
    </CardWeatherContainer>
  );
};

export default CardWeather;
