import CurrentInfo from "./CurrentInfo";
import ForecastInfo from "./ForecastInfo";
import Message from "./Message";

const WeatherDetails = ({ current, forecast }) => {
  if (!current || !forecast) return null;

  let { weather, main, wind, sys } = current;
  let { list } = forecast;
  
  //console.log(current);
  //console.log(forecast);

  const kelvinToCelcius = (celcius) => {
    celcius = main.temp - 273.15;
    return Number.parseFloat(celcius).toFixed(1);
  }

  return (
    <section className="section-container">
      {current.error === true
        ? <Message 
            msg="Se ha producido un error, intente nuevamente." 
            bgColor="#dc453575"
          /> 
        : <CurrentInfo
            current={current}
            weather={weather}
            main={main}
            wind={wind}
            sys={sys}
            kelvinToCelcius={kelvinToCelcius}
          />
      }

      {!forecast.error
        ? <ForecastInfo 
            forecast={forecast}
            list={list}
            kelvinToCelcius={kelvinToCelcius}
          />
          : null
      }
    </section>
  );
}

export default WeatherDetails;
 