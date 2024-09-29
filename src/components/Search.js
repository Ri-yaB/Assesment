import React from 'react';
import '../styles/Search.css';

const Search = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Products..."
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default Search;
