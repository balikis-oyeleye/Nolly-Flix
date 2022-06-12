import React from "react";
import { BsX } from "react-icons/bs";
import "./search.css";

const Search = () => {
  return (
    <div className={`dark:`}>
      <div className="search-main container mx-auto flex items-center justify-between">
        <input
          type="search"
          placeholder="Search..."
          className="dark:bg-dark-blue"
        />
        <button>
          <BsX />
        </button>
      </div>
    </div>
  );
};

export default Search;
