import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ books = [], onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };


  return (
    <div className='search-container'>
      <label>Search:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter book title..."
      />
    </div>
  );
};

export default SearchBar;
