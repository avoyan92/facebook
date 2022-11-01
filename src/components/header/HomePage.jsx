import React from "react";
import Search from "../../icons/Search";
import "../header/headercss/search.css";

const HomePage = ({searchValue, setSearchValue}) => {
  return (
    <div className="search">
      <img width={37} height={37} src="/facebook/facebook.jpg" alt="foto" />
      <span>
        <Search />
        <input 
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        type="text" 
        placeholder="Search" />
      </span>
    </div>
  );
};

export default HomePage;
