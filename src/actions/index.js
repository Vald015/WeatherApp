import axios from 'axios';

const API_KEY = 'cae2c19cf39b68219519c47cc2064d13';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

const url = `${ROOT_URL}&q=${city},us`;
const request = axios.get(url);   //promise

//console.log('Request: ', request );

  return {
    type: FETCH_WEATHER,
    payload: request
  };// returning promise as a payload
}
