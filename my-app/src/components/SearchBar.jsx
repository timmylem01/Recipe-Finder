import React, { useState } from "react";
import "./SearchBar.css";

import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {
  /* 
    Initiliaze input to an empty string
  */
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    // Used a template literal variable to search the API based on user's input value
    const userInput = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    // Invoke a fetch request to API using user's input value
    fetch(userInput)
      .then((response) => response.json())
      .then((json) => {
        // The results variable will be an array of recipes of recipes that contain the user's input
        const results = json.meals.filter((meal) => {
          return value && meal && meal.strMeal.toLowerCase();
        });
        // invoke the setResult function from the Home component to update results state
        setResults(results);
      });
  };

  const handleChange = (value) => {
    // Invoke the setInput function on the user's passed in value to update input's state
    setInput(value);
    // Invoke the fetchData function to make a fetch request
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
