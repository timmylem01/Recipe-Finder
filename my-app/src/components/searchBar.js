import React, {useState} from 'react';
import './SearchBar.css';

import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className='input-wrapper'>
      <FaSearch id="search-icon" />
      <input placeholder='Enter Recipe Name' />
    </div>
  )
}

export default SearchBar;