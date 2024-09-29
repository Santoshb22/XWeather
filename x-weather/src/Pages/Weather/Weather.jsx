import { useState } from "react";
import DisplayWeather from "../../Components/DisplayWeather/DisplayWeather";
import Search from "../../Components/Search/Search"
import styles from "./Weather.module.css"
const Weather = () => {

  const [city, setCity] = useState("");
  const handleGetCity = (cityName) => {
    setCity(cityName);
  }

  return (
    <div className={styles.weatherApp}>
      <div>
        <Search onClick = {handleGetCity}/>
      </div>

      <div>
        <DisplayWeather city = {city}/>
      </div>
    </div>
  )
}

export default Weather