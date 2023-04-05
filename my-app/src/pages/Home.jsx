import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx"

const Home = () => {

  const [results, setResults] = useState([]);

  return (
    <div>
      <h1>Home</h1>
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
    </div>
  )
};

export default Home;
