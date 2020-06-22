import React, { useState } from 'react';
import axios from 'axios';

import Input from './components/Input';
import Button from './components/Button';
import CardWeather from './components/CardWeather';

const App = () => {
  const [location, setLocation] = useState('');
  const [weathers, setWeathers] = useState([]);
  const [errorOnSeach, setErrorOnSearch] = useState(false);
  const searchCityWeather = async (e) => {
    e.preventDefault();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6561d68a6d7fb20da76e8417158f7087&units=metric`;

    await axios
      .get(url)
      .then((res) => {
        const { data } = res;
        setWeathers([
          ...weathers,
          <CardWeather
            icon={data.weather[0].icon}
            current={data.main.temp}
            max={data.main.temp_max}
            min={data.main.temp_min}
            city={data.name}
            country={data.sys.country}
          />,
        ]);
        setErrorOnSearch(false);
        setLocation('');
      })
      .catch((err) => setErrorOnSearch(true));
  };

  return (
    <div className='container'>
      <h1 className='main-title'>Simple Weather App</h1>
      <form onSubmit={searchCityWeather} className='search-container'>
        <Input onChange={(e) => setLocation(e.target.value)} value={location} />
        <Button>Submit</Button>
      </form>
      {errorOnSeach && (
        <p className='error-message'>Could not find the location</p>
      )}
      <div className='weathers-container'>{weathers}</div>
    </div>
  );
};

export default App;
