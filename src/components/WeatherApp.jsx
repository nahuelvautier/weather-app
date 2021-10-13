import React, { useEffect, useState } from "react";
import FormGetter from "./FormGetter";
import WeatherDetails from "./WeatherDetails";
import { helperFetch } from "../helpers/helperFetch";
import APIKEY from "../helpers/helperKey";
import Loader from "./Loader";

export const WeatherApp = () => {
  const [info, setInfo] = useState(null);
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loader, setLoader] = useState(false);

  
  useEffect(() => {
    const apiConnect = helperFetch();
    const fetchData = async () => {
      if (info === null) return;

      setCurrent(null);
      setForecast(null);
      setLoader(true);

      const { city } = info;

      let currentUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=${APIKEY.key}`;
      let forecastUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=es&appid=${APIKEY.key}`;

      //console.log(currentUrl);
      //console.log(forecastUrl);

      const [currentRes, forecastRes] = await Promise.all([
        apiConnect(currentUrl),
        apiConnect(forecastUrl),
      ]);

      //console.log(currentRes);
      //console.log(forecastRes);

      setCurrent(currentRes);
      setForecast(forecastRes);

      setLoader(false);
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
          <h1>Weather App</h1>
          <FormGetter infoGetter={infoGetter} />
        </nav>
      </header>
      <main>
        {loader && <Loader />}
        {info && <WeatherDetails current={current} forecast={forecast} />}
      </main>
      <footer className="footer-container">

      </footer>
    </div>
  )
}
