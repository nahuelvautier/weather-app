const ListForecast = ({ forecast, list, index, kelvinToCelcius }) => {
  console.log(list);
  //console.log(index);

  let queryRoute = list[index];
  let weatherIcon = `https://openweathermap.org/img/wn/${queryRoute.weather[0].icon}@2x.png`;
  let weekDays = new Date(queryRoute.dt_txt).toDateString();
  let date = new Date(queryRoute.dt_txt).toLocaleDateString();
  let time = new Date(queryRoute.dt_txt).toLocaleTimeString();
  let timeSliced = time.slice(0, 4);

  if (weekDays.includes("Mon")) weekDays = "Lunes";
  if (weekDays.includes("Tue")) weekDays = "Martes";
  if (weekDays.includes("Wed")) weekDays = "Miércoles";
  if (weekDays.includes("Thu")) weekDays = "Jueves";
  if (weekDays.includes("Fri")) weekDays = "Viernes";
  if (weekDays.includes("Sat")) weekDays = "Sábado";
  if (weekDays.includes("Sun")) weekDays = "Domingo";

  return (
    <aside>
      <h3>{weekDays} {date}</h3>
      <figure className="forecast-icon-container">
        <img src={weatherIcon} alt="Forecast Icon" />
        <figcaption><time>{timeSliced}hs</time> | {queryRoute.weather[0].description}</figcaption>
      </figure>
      <div className="specs-wrapper">
        <div className="time-rain-wrapper">
            <span>
              <p>Hum: {queryRoute.main.humidity}%</p>
              <p>Vien: {queryRoute.wind.speed}km/h</p>
            </span>
        </div>
        <div>
          <code>
            <span>Temp: {kelvinToCelcius(queryRoute.main.temp)}°C</span>
            <span>Min: {kelvinToCelcius(queryRoute.main.temp_min)}°C</span>
            <span>Max: {kelvinToCelcius(queryRoute.main.temp_max)}°C</span>
          </code>
        </div>
      </div>
    </aside>
  )
}

export default ListForecast;