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
    return Math.ceil(celcius);
  }

  return (
    <section className="section-container">
      {current.error === true || current.name === "Abort Error"
        ? <Message 
            msg="Se ha producido un error, intente nuevamente." 
            bgColor="#dc4535" 
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
          : <Message 
              msg="Hubo un error: No se puede acceder al pronóstico."  
              bgColor="#dc4545"
            />
      }
    </section>
  );
}

export default WeatherDetails;
 