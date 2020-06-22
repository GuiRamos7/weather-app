import styled from 'styled-components';

export const CardWeatherContainer = styled.div`
  width: 300px;
  height: 270px;
  box-sizing: border-box;
  padding: 25px;
  box-shadow: 0 0 5px #cacaca;
  border-radius: 15px;
  .location-container {
    display: flex;
    color: #333;
  }
  .weather-container {
    display: flex;
    align-items: center;
    .current-weather {
      font-size: 6.5rem;
      color: #222;
    }
    .max-weather,
    .min-weather {
      margin: 5px 0 5px 20px;
      font-size: 1.5rem;
    }
  }
`;
