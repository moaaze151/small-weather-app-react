import { useState } from "react";
import "./App.css";
import Form from "./component/Form/index";
import Data from "./component/Data/index";

// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
const API_KEY = "e36ed364400282e43250b6c4c0274d44";
function App() {
  const [weather, setWeather] = useState({
    name:null,
    country: "",
    desc: "",
    temp: null,
    humidity: null,
    error:""
  });

  async function getWeather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city.trim() === "" || country.trim() === "") {
      alert("please fill both filed");
      return;
    }
    const api = await fetch(
      ` http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`
    );
    const data = await api.json();
    const newWeather = {
      name: data.name,
      country: data.sys.country,
      desc: data.weather[0].description,
      temp: data.main.temp,
      humidity: data.main.humidity,
      error:"Please write a correct dada"
    };
    setWeather({ ...newWeather });
    e.target.elements.city.value = "";
    e.target.elements.country.value = "";
  }
  return (
    <div className="App">
      <div className="box">
      <Form getWeather={getWeather} />
      <Data weather = {weather}/>
      </div>
    </div>
  );
}

export default App;
// base: "stations"
// clouds: {all: 0}
// cod: 200
// coord: {lon: 31.2497, lat: 30.0626}
// dt: 1636771698
// id: 360630
// main: {temp: 290.57, feels_like: 290.38, temp_min: 290.05, temp_max: 290.57, pressure: 1014, …}
// name: "Cairo"
// sys: {type: 1, id: 2514, country: 'EG', sunrise: 1636777116, sunset: 1636815608}
// timezone: 7200
// visibility: 10000
// weather: [{}]description
// wind: {speed: 1.03, deg: 120}
