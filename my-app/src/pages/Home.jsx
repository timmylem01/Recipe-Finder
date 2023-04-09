import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import SearchResultsList from "../components/SearchResultsList.jsx";

import "./Home.css";

const Home = () => {
  /* 
    Home is the parent component for the search bar and the results of the search bar.
    Initiliaze results state to an empty array
  */
  const [results, setResults] = useState([]);

  return (
    <div className="home-page">
      <h1>Home</h1>
      {/* Pass the setResults function down as a prop to SearchBar component as the results from the fetch request will update results state. */}
      <SearchBar setResults={setResults} />
      {/* Pass results down as a prop to SearchResultsList to create the search result list with data from fetch request. */}
      <SearchResultsList results={results} />
    </div>
  );
};

export default Home;
