const TomorrowForecast = ({ forecast, list, kelvinToCelcius }) => {
  let { dt_txt, main, rain, weather } = list;
  //console.log(list);

  const tomorrow = {
    morning: list[1].weather[0],
    afternoon: list[4].weather[0],
    night: list[6].weather[0],
  }
  
   const MorningIconUrl = `https://openweathermap.org/img/wn/${tomorrow.morning.icon}@2x.png`;
   const AfternoonIconUrl = `https://openweathermap.org/img/wn/${tomorrow.afternoon.icon}@2x.png`;
   const NightIconUrl = `https://openweathermap.org/img/wn/${tomorrow.night.icon}@2x.png`;

 // 1 , 4 , 6  - tomorrow

  return (
    <div>
      <h3>Mañana</h3>
      <figure>
        <img src={MorningIconUrl} alt="Forecast Icon" />
        <figcaption>{tomorrow.morning.description}</figcaption>
      </figure>
      <aside>
        <div>

        </div>
        <div>

        </div>
      </aside>
      {/*  */}
      <h5></h5>
      <figure>
        <img src={AfternoonIconUrl} alt="Forecast Icon" />
        <figcaption>{tomorrow.afternoon.description}</figcaption>
      </figure>
      <aside>
        <div>

        </div>
        <div>

        </div>
      </aside>
      {/*  */}
      <h5></h5>
      <figure>
        <img src={NightIconUrl} alt="Forecast Icon" />
        <figcaption>{tomorrow.night.description}</figcaption>
      </figure>
      <aside>
        <div>

        </div>
        <div>

        </div>
      </aside>
    </div>
  )
}

export default TomorrowForecast;