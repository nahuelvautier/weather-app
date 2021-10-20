import "./CurrentInfo.css";

const CurrentInfo = ({ current, weather, main, wind, sys, kelvinToCelcius }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  //console.log(weather);
  //console.log(main.temp);
  //console.log(visibility);
  //console.log(wind);
  //console.log(sys);

  if (iconUrl.includes("d@4x")) {
    //document.getElementById("root").style.backgroundImage = "url(https://i.pinimg.com/originals/bc/22/a8/bc22a864b99bfbfab6c1e7b52973916a.gif)";
    document.getElementById("root").style.backgroundImage = "url(https://img.allw.mn/content/sn/x3/wi29hyxi54ef412c818ca644447713_640x360.gif)";
    document.getElementById("root").style.backgroundSize = "100% 100%";
    document.getElementById("root").style.backgroundRepeat = "no-repeat";
    document.getElementById("root").style.backgroundPositionY = "bottom";
    document.getElementById("root").style.backgroundAttachment = "fixed";
    document.getElementById("root").style.backgroundColor = "#AAA";
  } else if (iconUrl.includes("n@4x")) {
    document.getElementById("root").style.backgroundImage = "url(https://i.gifer.com/origin/c5/c5660392f5ffd5b4632dd944f3de2134.gif)";
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
        <img src={iconUrl} alt="Weather Icon" />
        <figcaption>{weather[0].description}</figcaption>
      </figure>
      <aside className="current-weather-specs">
        <div>
          <div><p>Temperatura: {kelvinToCelcius(main.temp)}°C</p></div>
          <div><p>Mínima: {kelvinToCelcius(main.temp_min)}°C</p></div>
          <div><p>Máxima: {kelvinToCelcius(main.temp_max)}°C</p></div>
        </div>
        <div>
          <div><p>Humedad: <span> {main.humidity}%</span></p></div>
          <div><p><span>S. Térm:</span> {kelvinToCelcius(main.feels_like)}°C</p></div>
          <div><p>Viento: <span> {wind.speed} km/h</span></p></div>
        </div>
      </aside>
    </article>
  );
}

export default CurrentInfo;