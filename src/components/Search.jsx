import { useState } from "react";

function Search({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        id="city-data"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="search city name"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
