import NavBar from "./components/NavBar";
import "./App.css";
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";
import WeatherDataJSON from "./components/WeatherData.json";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = (city) => {
    if (city === WeatherDataJSON.name) {
      setWeather(WeatherDataJSON);
    } else {
      setWeather(null);
    }
  };

  return (
    <div id="App">
      <NavBar />
      <div id="app-content">
        <WeatherData weather={weather} />
        <Search onSearch={handleSearch} />
      </div>
    </div>
  );
}

export default App;
