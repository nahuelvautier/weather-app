import ListForecast from "./ListForecast";

const ForecastInfo = ({ forecast, list, kelvinToCelcius }) => {
  return (
    <article className="forecast-weather-wrapper">
      {list.map((el, index) => 
      <ListForecast 
          key={index}
          forecast={forecast}
          list={list} 
          index={index}
          kelvinToCelcius={kelvinToCelcius} 
        />
      )}
    </article>
  );
}

export default ForecastInfo;
