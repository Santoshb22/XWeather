import { useEffect, useState } from "react";
import "./DisplayWeather.css";
import WeatherCard from "../WeatherCard/WeatherCard";

const DisplayWeather = ({city}) => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY

  const fetchData = () => {
    if(city) {
      setLoading(true);
      setWeatherData(null);

      fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
      .then(res =>{
        return res.json();
      })
      .then(data => {
        if(!data.error){
        setWeatherData(data);
        setLoading(false);
        } else {
          console.log("Error fetching data: ", data.error);
          alert("Failed to fetch weather data");
        }
      })
      .catch(err => {
        console.error("Error fetching data: ", err);
        alert("Failed to fetch weather data");
        setLoading(false);
      })
      .finally(() => setLoading(false));
    }
  }

  useEffect(() => {
    fetchData();
  }, [city])

  return (
    <div className="displayWeather">
      {
        loading && <p>Loading data...</p>
      }

      {
        !loading && weatherData && (
          <div className="weather-cards">
            <WeatherCard 
            title={"Tempreature"} 
            value={weatherData?.current?.temp_c} 
            unit= {"°C"}
            />

            <WeatherCard 
            title={"Humidity"} 
            value={weatherData?.current?.humidity} 
            unit={"%"}
            />

            <WeatherCard 
            title={"Condition"} 
            value={weatherData?.current?.condition?.text}
            />

            <WeatherCard 
            title={"Wind Speed"} 
            value={weatherData?.current?.wind_kph} 
            unit={" kph"}
            />
          </div> 
        )
      }
    </div>
  )
}

export default DisplayWeather