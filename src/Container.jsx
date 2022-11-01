import React from "react"
import Content from "./components/Content"
import Header from "./components/Header"
import { useState } from "react"


const Container = () => {
      const [searchValue, setSearchValue] = useState('')
      return (
            <div className="container">
                 <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                 <Content searchValue={searchValue} />
                 
            </div>
      )
}

export default Container