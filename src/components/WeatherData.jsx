function WeatherData({ weather }) {
  if(!weather) return <h1>enter city</h1>
  return (
    <div id="weather-container">
      <img src="https://openweathermap.org/img/wn/03d@2x.png" alt="" />
      <div id="weather-details">
        <h1>{weather.name}</h1>
        <h2>{weather.main.temp} °c</h2>
        <h3 className="description">{weather.weather[0].description}</h3>
      </div>
    </div>
  );
}

export default WeatherData;
