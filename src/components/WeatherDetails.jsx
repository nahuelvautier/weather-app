import CurrentInfo from "./CurrentInfo";
import ForecastInfo from "./ForecastInfo";
import Message from "./Message";

const WeatherDetails = ({ info, current, forecast }) => {
  if (!current || !forecast) return null;

  return (
    <section className="">
      {current.error === true || current.name === "Abort Error" 
        ? <Message msg="Se ha producido un error, intente nuevamente." bgColor="#dc4535" /> 
        : <CurrentInfo />
      }

      {!forecast.error 
      ? <ForecastInfo /> 
      : <Message msg="Hubo un error: No se puede acceder al pronóstico" bgColor="#dc4545"/>}
    </section>
  );
}

export default WeatherDetails;
 