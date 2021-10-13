import TomorrowForecast from "./TomorrowForecast";
import AfterTomorrowForecast from "./AfterTomorrowForecast";
import NextDayAfterTomorrowForecast from "./NextDayAfterTomorrowForecast";

const ForecastInfo = ({ forecast, list, kelvinToCelcius }) => {
 // 9, 12, 14 - after tomorrow
 // 17, 20, 22 - next day after

  return (
    <article className="forecast-weather-wrapper">
      <TomorrowForecast list={list} kelvinToCelcius={kelvinToCelcius} />
      <AfterTomorrowForecast list={list} kelvinToCelcius={kelvinToCelcius} />
      <NextDayAfterTomorrowForecast list={list} kelvinToCelcius={kelvinToCelcius} />
    </article>
  );
}

export default ForecastInfo;
