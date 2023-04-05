import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import SearchResultsList from "../components/SearchResultsList.jsx"

import "./Home.css"

const Home = () => {

  const [results, setResults] = useState([]);

  return (
    <div className="home-page">
      <h1>Home</h1>
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results} />
    </div>
  )
};

export default Home;
