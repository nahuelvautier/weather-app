import CurrentInfo from "./CurrentInfo";
import ForecastInfo from "./ForecastInfo";
import Message from "./Message";

const WeatherDetails = ({ current, forecast }) => {
  if (!current || !forecast) return null;

  let { weather, main, visibility, wind, sys } = current;

  //console.log(current);
  //console.log(forecast);

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
            visibility={visibility}
            sys={sys}
          />
      }

      {!forecast.error 
        ? <ForecastInfo 

          /> 
        : <Message 
            msg="Hubo un error: No se puede acceder al pronóstico."  
            bgColor="#dc4545"
          />}
    </section>
  );
}

export default WeatherDetails;
 