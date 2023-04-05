import React from "react";

import Card from "./Card.jsx"
import "./SearchResult.css";

const SearchResult = ({ result }) => {
  // console.log(result);
  return (
    <div
      className="search-result"
    >
      <Card result={result} />
    </div>
  );
};

export default SearchResult;
