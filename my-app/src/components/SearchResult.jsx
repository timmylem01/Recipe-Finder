import React from "react";

import Card from "./Card.jsx";
import "./SearchResult.css";

const SearchResult = ({ result }) => {
  return (
    <div className="search-result">
      {/* Make cards for each search result to display name, image, and description */}
      <Card key={result.idMeal} displayDelete={false} result={result} />
    </div>
  );
};

export default SearchResult;
