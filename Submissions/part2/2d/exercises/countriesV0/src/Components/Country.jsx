import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Country = ({country}) => {
  const {name, capital, area, languages, flags, latlng} = country;

  const apiKey=import.meta.env.VITE_WEATHER_API_KEY;
  const [lat, long] = latlng;
  const apiURL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

  const [weather, setWeather] = useState({});
  
  useEffect(() => {
    const weatherFetch = axios.get(apiURL)
    .then(res => {
      const weatherObject = {
        wind: res.data.wind.speed,
        temperature: res.data.main.temp,
        iconSrc: `https://openweathermap.org/payload/api/media/file/${res.data.weather[0].icon}.png`
      };
      setWeather(weatherObject);
    })
    .catch(err => console.error("Error fetching weather: ", err));
  }, []);

  return (
    <div className="countryInfo">
        <h4>{name.common}</h4>
        <div>Capital: {capital[0]}</div>
        <div>Area: {area}</div>
        <div><strong>Languages:</strong>
            <ul>
              {Object.values(languages).map(language => <li key={language}>{language}</li>)}
            </ul>
        </div>
        <img src={flags.png} />

        {Object.keys(weather).length > 0 &&
          <div>
              <h4>Weather in {capital[0]}</h4>
              {weather.temperature !== undefined && <div>Temperature: {weather.temperature}</div>}
              {weather.iconSrc !== undefined && <div>
                <img src={weather.iconSrc} alt="Weather condition icon" />
              </div>}
              {weather.wind !== undefined && <div>Wind: {weather.wind}</div>}
          </div>
        }
    </div>
  )
}

export default Country;
