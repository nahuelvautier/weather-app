const NextDayAfterTomorrowForecast = ({ forecast, list, kelvinToCelcius }) => {
  let { dt_txt, main, rain, weather } = list;

  const nextDayAfterTomorrow = {
    morning: list[17].weather[0],
    afternoon: list[20].weather[0],
    night: list[22].weather[0],
  }

  const morningIconUrl = `https://openweathermap.org/img/wn/${nextDayAfterTomorrow.morning.icon}@2x.png`;
  const afternoonIconUrl = `https://openweathermap.org/img/wn/${nextDayAfterTomorrow.afternoon.icon}@2x.png`;
  const nightIconUrl = `https://openweathermap.org/img/wn/${nextDayAfterTomorrow.night.icon}@2x.png`;

  return (
    <div>
      <h3></h3>
      <figure>
        <img src={morningIconUrl} alt="Forecast Icon" />
        <figcaption>{nextDayAfterTomorrow.morning.description}</figcaption>
      </figure>
      <aside>
        <div>

        </div>
        <div>

        </div>
      </aside>
      {/*  */}

      <figure>
        <img src={afternoonIconUrl} alt="Forecast Icon" />
        <figcaption>{nextDayAfterTomorrow.afternoon.description}</figcaption>
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
        <figcaption>{nextDayAfterTomorrow.night.description}</figcaption>
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

export default NextDayAfterTomorrowForecast;