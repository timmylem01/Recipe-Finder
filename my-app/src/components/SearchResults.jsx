import React from "react";
import "./SearchResults.css";

const SearchResults = ({ results }) => {
  console.log(results);
  const card = results.map((result) => {
         return <div key={result.id}>{result.name}</div>;
      })
  return (
    <div className="results-list">
      {card}
    </div>
  );
};

export default SearchResults;
