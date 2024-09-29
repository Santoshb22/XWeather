import { useState } from "react";
import styles from "./Search.module.css";

const Search = ({onClick}) => {
    const [city, setCity] = useState("");

    const handleCityName = () => {
        onClick(city);
        setCity("")
    }

  return (
    <div className={styles.searchBox}>
        <input 
        onChange={(e) => setCity(e.target.value)}
        type="text" 
        value={city}
        placeholder="Enter city name"
        />
        <button onClick={handleCityName}
        >Search</button>
    </div>
  )
}

export default Search