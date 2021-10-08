import React, { useEffect, useState } from "react";
import DataInfo from "./DataInfo";
import ForecastInfo from "./ForecastInfo";
import FormGetter from "./FormGetter";
import { helperFetch } from "../helpers/helperFetch";
import APIKEY from "../helpers/helperKey";

export const WeatherApp = () => {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  const apiConnect = helperFetch();

  let currentUrl = `api.openweathermap.org/data/2.5/weather?q=${info}&appid=${APIKEY.key}`;
  let forecastUrl = "";

  useEffect(() => {
    apiConnect(currentUrl)
      .then(res => {
        if (!res.ok) {
          console.log(res);
        } else {
          console.log(res);
        }
      })
  }, [currentUrl])

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
        <section>
          <DataInfo info={info} setInfo={setInfo} infoGetter={infoGetter}/>
        </section>
        <section>
          <ForecastInfo info={info} setInfo={setInfo} infoGetter={infoGetter}/>
        </section>
      </main>
      <footer className="footer-container">

      </footer>
    </div>
  )
}
