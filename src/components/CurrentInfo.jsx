const CurrentInfo = ({ current, weather, main, visibility, wind, sys }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  //console.log(weather);
  //console.log(main);
  //console.log(visibility);
  //console.log(wind);
  //console.log(sys);
  
  return (
    <article className="current-weather-wrapper">
      <div>
        <h2>{current.name}, {sys.country}</h2>
      </div>
      <figure>
        <img src={iconUrl} alt="Weather Icon" />
        <figcaption>{weather[0].description}</figcaption>
      </figure>
      <aside>

      </aside>
    </article>
  );
}

export default CurrentInfo;