import React from "react";
import { Link } from "react-router-dom";
import Search from "../../icons/Search";
import "../header/headercss/search.css";

const HomePage = ({searchValue, setSearchValue}) => {
  return (
    <div className="search">
      <Link to='/lentcontent'>
      <img width={37} height={37} src="/facebook/facebook.jpg" alt="foto" />

      </Link>
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
