import "./CurrentInfo.css";

const CurrentInfo = ({ current, weather, main, wind, sys, kelvinToCelcius }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  //console.log(weather);
  //console.log(main.temp);
  //console.log(visibility);
  //console.log(wind);
  //console.log(sys);

  if (iconUrl.includes("d@4x")) {
    document.getElementById("root").style.backgroundImage = "url(./assets/light-sky.gif)";
    document.getElementById("root").style.backgroundSize = "100% 100%";
    document.getElementById("root").style.backgroundRepeat = "no-repeat";
    document.getElementById("root").style.backgroundPositionY = "bottom";
    document.getElementById("root").style.backgroundAttachment = "fixed";
    document.getElementById("root").style.backgroundColor = "#AAA";
  } else if (iconUrl.includes("n@4x")) {
    document.getElementById("root").style.backgroundImage = "url(./assets/night-sky.gif)";
    document.getElementById("root").style.backgroundSize = "100% 100%";
    document.getElementById("root").style.backgroundRepeat = "no-repeat";
    document.getElementById("root").style.backgroundPositionY = "bottom";
    document.getElementById("root").style.backgroundAttachment = "fixed";
    document.getElementById("root").style.backgroundColor = "#000";
  }
  
  return (
    <article className="current-weather-wrapper">
      <div className="titles-wrapper">
        <h2>{current.name}, {sys.country}</h2>
        <hr />
        <h3>Hoy</h3>
      </div>
      <figure>
        <img src={iconUrl} alt="Icono del clima actual" loading="lazy" />
        <figcaption>{weather[0].description}</figcaption>
      </figure>
      <aside className="current-weather-specs">
        <span>
          <p>Temperatura: {kelvinToCelcius(main.temp)}°C</p>
          <p>Mínima: {kelvinToCelcius(main.temp_min)}°C</p>
          <p>Máxima: {kelvinToCelcius(main.temp_max)}°C</p>
        </span>
        <span>
          <p>Humedad: {main.humidity}%</p>
          <p>S. Térm:{kelvinToCelcius(main.feels_like)}°C</p>
          <p>Viento: {wind.speed} km/h</p>
        </span>
      </aside>
    </article>
  );
}

export default CurrentInfo;