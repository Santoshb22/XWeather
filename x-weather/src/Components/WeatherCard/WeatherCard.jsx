import "./WeatherCard.css";

const WeatherCard = ({title, value, unit = ""}) => {
  return (
    <div className="weather-card">
      <p className="weatherType">{title}</p>
      <p className="value">{value}{unit}</p>
    </div>
  )
}

export default WeatherCard