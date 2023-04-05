import React from "react";
import "./SearchResult.css";

const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You clicked on ${result.strMeal}`)}
    >
      {result.strMeal}
    </div>
  );
};

export default SearchResult;
