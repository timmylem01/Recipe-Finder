import React from "react";

import Card from "./Card.jsx"
import "./SearchResult.css";

const SearchResult = ({ result }) => {
  // console.log(result);
  return (
    <div
      className="search-result"
    >
      <Card key={result.idMeal} result={result} />
    </div>
  );
};

export default SearchResult;
