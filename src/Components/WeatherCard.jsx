import "./styles/style.-weather-card.css";
import { MdOutlineLocationOn } from "react-icons/md";
import {
  FaThermometerThreeQuarters,
  FaTemperatureHigh,
  FaTemperatureLow,
} from "react-icons/fa";
import { ImDroplet } from "react-icons/im";

const WeatherCard = (props) => {
  const changeToCelsius = (kelvin) => {
    const celsius = Math.round(kelvin - 273.15);
    return celsius;
  };
  const getWeatherIcons = (iconParameter) => {
    const icon = `https://openweathermap.org/img/wn/${iconParameter}@2x.png`;
    return <img src={icon} alt={props.weatherResult.weather[0].description} />;
  };

  document.title = "Weather : " + props.weatherResult.name;

  return (
    <div className="weather-card">
      <div className="part-1">
        <div className="location">
          <MdOutlineLocationOn />
          <h1>{props.weatherResult.name}</h1>
        </div>
        <div className="temp-show">
          <div className="temp-image">
            {getWeatherIcons(props.weatherResult.weather[0].icon)}
          </div>
          <div className="temp">
            <FaThermometerThreeQuarters />
            <h2>{changeToCelsius(props.weatherResult.main.temp)}&deg;C</h2>
          </div>
          <h4>{props.weatherResult.weather[0].description}</h4>
        </div>
      </div>
      <div className="part-2">
        <div className="humidity">
          <ImDroplet />
          <h2>Humidity : {props.weatherResult.main.humidity} %</h2>
        </div>
        <div className="all-temp">
          <div className="max-temp">
            <FaTemperatureHigh />
            <p>
              max-temp : {changeToCelsius(props.weatherResult.main.temp_max)}
            </p>
          </div>
          <div className="min-temp">
            <FaTemperatureLow />
            <p>
              min-temp : {changeToCelsius(props.weatherResult.main.temp_min)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
