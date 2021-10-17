import "./ListForecast.css";

const ListForecast = ({ list, index, kelvinToCelcius }) => {
  //console.log(list);
  //console.log(index);

  let queryRoute = list[index];
  let weatherIcon = `https://openweathermap.org/img/wn/${queryRoute.weather[0].icon}@2x.png`;
  let weekDays = new Date(queryRoute.dt_txt).toDateString();
  let date = new Date(queryRoute.dt_txt).toLocaleDateString();
  let dateSliced = date.slice(0, 5);
  let time = new Date(queryRoute.dt_txt).toLocaleTimeString();
  let timeSliced = time.slice(0, 5);

  if (weekDays.includes("Mon")) weekDays = "Lunes";
  if (weekDays.includes("Tue")) weekDays = "Martes";
  if (weekDays.includes("Wed")) weekDays = "Miércoles";
  if (weekDays.includes("Thu")) weekDays = "Jueves";
  if (weekDays.includes("Fri")) weekDays = "Viernes";
  if (weekDays.includes("Sat")) weekDays = "Sábado";
  if (weekDays.includes("Sun")) weekDays = "Domingo";

  return (
    <aside className="forecast-container">
      <h3>{weekDays} {dateSliced}</h3>
      <figure className="forecast-icon-container">
        <img src={weatherIcon} alt="Forecast Icon" />
        <figcaption>{queryRoute.weather[0].description} | <time>{timeSliced}hs</time></figcaption>
      </figure>
      <div className="specs-wrapper">
        <div className="time-rain-wrapper">
            <span>
              <p>Hum: {queryRoute.main.humidity}%</p>
              <p>Vien: {queryRoute.wind.speed}km/h</p>
            </span>
        </div>
        <div className="time-temp-wrapper">
          <span>
            <p>Temp: {kelvinToCelcius(queryRoute.main.temp)}°C</p>
            <p>Mín: {kelvinToCelcius(queryRoute.main.temp_min)}°C</p>
            <p>Máx: {kelvinToCelcius(queryRoute.main.temp_max)}°C</p>
          </span>
        </div>
      </div>
    </aside>
  )
}

export default ListForecast;