import { useState } from "react";
import styles from "./Search.module.css";

const Search = ({onClick}) => {
    const [city, setCity] = useState("");

    const handleCityName = () => {
        onClick(city);
    }

  return (
    <div className={styles.searchBox}>
        <input 
        onChange={(e) => setCity(e.target.value)}
        type="text" 
        placeholder="Enter city name"
        />
        <button onClick={handleCityName}
        >Search</button>
    </div>
  )
}

export default Search