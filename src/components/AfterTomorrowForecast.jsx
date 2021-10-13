const AfterTomorrowForecast = ({ forecast, list, kelvinToCelcius }) => {
  let { dt_txt, main, rain, weather } = list;

  const afterTomorrow = {
    morning: list[9].weather[0],
    afternoon: list[12].weather[0],
    night: list[14].weather[0],
  }

  const morningIconUrl = `https://openweathermap.org/img/wn/${afterTomorrow.morning.icon}@2x.png`;
  const afternonIconUrl = `https://openweathermap.org/img/wn/${afterTomorrow.afternoon.icon}@2x.png`;
  const nightIconUrl = `https://openweathermap.org/img/wn/${afterTomorrow.night.icon}@2x.png`;

  return (
    <div>
      <h3></h3>
      <figure>
        <img src={morningIconUrl} alt="Forecast Icon" />
        <figcaption>{afterTomorrow.morning.description}</figcaption>
      </figure>
      <aside>
        <div>

        </div>
        <div>

        </div>
      </aside>
      {/*  */}

      <figure>
        <img src={afternonIconUrl} alt="Forecast Icon" />
        <figcaption>{afterTomorrow.afternoon.description}</figcaption>
      </figure>
      <aside>
        <div>

        </div>
        <div>

        </div>
      </aside>
      {/*  */}

      <figure>
        <img src={nightIconUrl} alt="Forecast Icon" />
        <figcaption>{afterTomorrow.night.description}</figcaption>
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

export default AfterTomorrowForecast
