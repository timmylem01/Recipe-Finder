import React, { useState } from "react";
import "./SearchBar.css";

import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    const input = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    fetch(input)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        const results = json.meals.filter((meal) => {
          return value && meal && meal.strMeal.toLowerCase();
        });
        // console.log(results)
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Enter Ingredient"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
