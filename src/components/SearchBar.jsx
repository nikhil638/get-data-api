import React from "react";
import "./css/SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search PDFs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
