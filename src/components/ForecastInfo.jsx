import ListForecast from "./ListForecast";

const ForecastInfo = ({ forecast, list, kelvinToCelcius }) => {
  let styles = {
    display: "inline-flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  }

  return (
    <article style={styles} className="forecast-weather-wrapper">
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
