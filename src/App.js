import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric',
      { appid: '6561d68a6d7fb20da76e8417158f7087' }
    );
  }, []);

  return <div>Hello Word</div>;
};

export default App;
