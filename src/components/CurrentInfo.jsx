const CurrentInfo = ({ current, weather, main, wind, sys, kelvinToCelcius }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  //console.log(weather);
  //console.log(main.temp);
  //console.log(visibility);
  //console.log(wind);
  //console.log(sys);
  
  return (
    <article className="current-weather-wrapper">
      <div>
        <h2>{current.name}, {sys.country}</h2>
        <h3>Hoy</h3>
      </div>
      <figure>
        <img src={iconUrl} alt="Weather Icon" />
        <figcaption>{weather[0].description}</figcaption>
      </figure>
      <aside className="current-weather-specifics">
        <div>
          <p>Temperatura: {kelvinToCelcius(main.temp)}°C</p>
          <p>Mínima: {kelvinToCelcius(main.temp_min)}°C</p>
          <p>Máxima: {kelvinToCelcius(main.temp_max)}°C</p>
          <p>Sensación térmica: {kelvinToCelcius(main.feels_like)}°C</p>
        </div>
        <div>
          <p>Humedad: {main.humidity}%</p>
          <p>Viento: {wind.speed} km/h</p>
        </div>
      </aside>
    </article>
  );
}

export default CurrentInfo;