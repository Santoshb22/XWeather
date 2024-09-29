import { useEffect, useState } from "react";
import styles from "./DisplayWeather.module.css";

const DisplayWeather = ({city}) => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY

  console.log("weatherData", weatherData);

  const fetchData = () => {
    if(city) {
      setLoading(true);

      fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
      .then(res =>{
        return res.json();
      })
      .then(data => {
        setWeatherData(data)
      })
      .catch(err => {
        console.log(err);
        alert("Failed to fetch weather data");
      })
      .finally(() => setLoading(false));

    }
  }

  useEffect(() => {
    fetchData();
  }, [city])

  return (
    <div className={styles.displayWeather}>
      {
        loading && <p>Loading</p>
      }

      {
        !loading && weatherData && (
          <div>
            weather card
          </div> 
        )
      }
    </div>
  )
}

export default DisplayWeather