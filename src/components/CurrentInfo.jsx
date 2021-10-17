import "./CurrentInfo.css";

const CurrentInfo = ({ current, weather, main, wind, sys, kelvinToCelcius }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  //console.log(weather);
  //console.log(main.temp);
  //console.log(visibility);
  //console.log(wind);
  //console.log(sys);
  
  return (
    <article className="current-weather-wrapper">
      <div className="titles-wrapper">
        <h2>{current.name}, {sys.country}</h2>
        <hr />
        <h3>Hoy</h3>
      </div>
      <figure>
        <img src={iconUrl} alt="Weather Icon" />
        <figcaption>{weather[0].description}</figcaption>
      </figure>
      <aside className="current-weather-specs">
        <div>
          <p>Temperatura: {kelvinToCelcius(main.temp)}°C</p>
          <p>Mínima: {kelvinToCelcius(main.temp_min)}°C</p>
          <p>Máxima: {kelvinToCelcius(main.temp_max)}°C</p>
        </div>
        <div>
          <p>Humedad: <span> {main.humidity}%</span></p>
          <p><span>S. Térm:</span> {kelvinToCelcius(main.feels_like)}°C</p>
          <p>Viento: <span> {wind.speed} km/h</span></p>
        </div>
      </aside>
    </article>
  );
}

export default CurrentInfo;