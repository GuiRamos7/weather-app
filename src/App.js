import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  const [location, setLocation] = useState('');

  const searchCityWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6561d68a6d7fb20da76e8417158f7087&units=metric`;

    axios.get(url).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=London&=&units=metric',
      { appid: '' }
    );
  }, []);

  return (
    <div className='container'>
      <h1 className='main-title'>Simple Weather App</h1>
      <div className='search-container'>
        <Input onChange={(e) => setLocation(e.target.value)} value={location} />
        <Button onClick={searchCityWeather}>Submit</Button>
      </div>
    </div>
  );
};

export default App;
