import React from "react";

import Card from "./Card.jsx"
import "./SearchResult.css";

const SearchResult = ({ result }) => {
  // console.log(result);
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You clicked on ${result.strMeal}`)}
    >
      <Card result={result} />
    </div>
  );
};

export default SearchResult;
