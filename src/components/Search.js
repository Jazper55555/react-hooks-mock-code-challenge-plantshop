import React, { useState } from "react";

function Search({nameSearch, setNameSearch, handleSearch}) {

  function handleChange(event) {
    setNameSearch(event.target.value)
    handleSearch(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={nameSearch}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
