import React, { useEffect, useState } from "react";
import FormGetter from "./FormGetter";
import WeatherDetails from "./WeatherDetails";
import { helperFetch } from "../helpers/helperFetch";
import APIKEY from "../helpers/helperKey";
import Loader from "./Loader";
import FooterContent from "./FooterContent";

export const WeatherApp = () => {
  const [info, setInfo] = useState({ city: "Buenos Aires"} );
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

  const infoGetter = (data) => setInfo(data);

  return (
    <div className="weather-app-container">
      <header className="header-container">
        <nav>
          <div>
            <h1>Weather App</h1>
          </div>
          <FormGetter infoGetter={infoGetter} />
        </nav>
      </header>
      <main>
        {loader && <Loader />}
        {info && <WeatherDetails current={current} forecast={forecast} />}
      </main>
      <footer className="footer-container">
        <FooterContent />
      </footer>
    </div>
  )
}
