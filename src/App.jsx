import { useState } from "react";
import axios from "axios";
import "./App.css";
import CitySearch from "./Components/CitySearch";
import WeatherCard from "./Components/WeatherCard";

const App = () => {
  const [weatherResult, setWeatherResult] = useState("");

  const onSearchSubmit = async (searchInputValue) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=ca261c971d5638db9d4d6cbccc1f093d`
    );
    console.log(response.data);
    setWeatherResult(response.data);
  };


  return (
    <div className="body">
      <h1 className="title">WEATHER</h1>
      <div className="glass-card">
        <CitySearch onSearchSubmit={onSearchSubmit} />
        {weatherResult ? (
          <WeatherCard weatherResult={weatherResult} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default App;
