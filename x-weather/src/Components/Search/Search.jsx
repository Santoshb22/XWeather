import { useState } from "react";
import "./Search.css"
const Search = ({onClick}) => {
    const [city, setCity] = useState("");

    const handleCityName = () => {
        onClick(city);
    }

  return (
    <div className="search-bar">
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