import React from "react"
import HomePage from "./header/HomePage"
import Category from '../components/header/Cotegory'
import MassageBox from './header/MassageBox'
import './header/headercss/header.css'





const Header = ({searchValue, setSearchValue}) => {
      return (
            <div className="header">
                  <HomePage searchValue={searchValue} setSearchValue={setSearchValue}/>
                  <Category />
                  <MassageBox/>
            </div>
      )
}

export default Header