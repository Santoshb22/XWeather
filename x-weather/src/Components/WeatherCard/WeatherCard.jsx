import styles from "./WeatherCard.module.css";

const WeatherCard = ({title, value, unit = ""}) => {
  return (
    <div className={styles.card}>
      <p className={styles.weatherType}>{title}</p>
      <p className={styles.value}>{value}{unit}</p>
    </div>
  )
}

export default WeatherCard