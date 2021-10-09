import React, { useEffect, useState } from "react";
import CurrentInfo from "./CurrentInfo";
import ForecastInfo from "./ForecastInfo";
import FormGetter from "./FormGetter";
import { helperFetch } from "../helpers/helperFetch";
import APIKEY from "../helpers/helperKey";

export const WeatherApp = () => {
  const [info, setInfo] = useState(null);
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const apiConnect = helperFetch();

  useEffect(() => {
    const fetchData = async () => {
      if (info === null) return;

      const { city } = info || "";

      let currentUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY.key}`;
      let forecastUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY.key}`;

      console.log(currentUrl);
      console.log(forecastUrl);

      const [currentRes, forecastRes] = await Promise.all([
        apiConnect(currentUrl),
        apiConnect(forecastUrl),
      ]);

      console.log(currentRes);
      console.log(forecastRes);

      setCurrent(currentRes);
      setForecast(forecastRes);
    }

    fetchData();
  }, [info]);

  const infoGetter = (data) => {
    setInfo(data);
  }

  return (
    <div className="weather-app-container">
      <header className="header-container">
        <nav>
          <h1>Weather APP</h1>
          <FormGetter info={info} setInfo={setInfo} infoGetter={infoGetter} />
        </nav>
      </header>
      <main>
          {info && <CurrentInfo info={info} current={current} forecast={forecast} />}
          {/* {info && <ForecastInfo info={info} setInfo={setInfo} infoGetter={infoGetter}/>} */}
      </main>
      <footer className="footer-container">

      </footer>
    </div>
  )
}
