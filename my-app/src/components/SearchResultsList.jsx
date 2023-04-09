import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultsList.css";

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {/* Take the results to make individual search results with the data, with each of them being unique */}
      {results.map((result, id) => {
        return <SearchResult result={result} key={result.idMeal} />;
      })}
    </div>
  );
};

export default SearchResultsList;
