import React, { useState } from "react";

function Search({ onSearch }) {
  // const [searchInput, setSearchInput] = useState("")

  function handleChange(search) {
    // setSearchInput(search)
    onSearch(search)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          name="input"
          // value={searchInput}
          onChange={(e) => onSearch(e.target.value)}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
