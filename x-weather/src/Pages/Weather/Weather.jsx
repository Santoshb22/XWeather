import { useState } from "react";
import DisplayWeather from "../../Components/DisplayWeather/DisplayWeather";
import Search from "../../Components/Search/Search"
import "./Weather.css"
const Weather = () => {

  const [city, setCity] = useState("");
  const handleGetCity = (cityName) => {
    setCity(cityName);
  }

  return (
    <div className="weatherApp">
      <div>
        <Search onClick = {handleGetCity}/>
      </div>

      <div className="displayWeather">
        <DisplayWeather city = {city}/>
      </div>
    </div>
  )
}

export default Weather