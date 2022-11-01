import React from "react"
import Home from "../../icons/Home"
import Marketplace from "../../icons/Marketplace"
import People from '../../icons/People'
import TheGame from "../../icons/TheGame"
import Watch from "../../icons/Watch"
import '../header/headercss/cotegory.css'




const Cotegory = () => {
      return (
            <div className="cotegory">
                 <div><Home /></div>
                 <div><Watch /></div>
                 <div><Marketplace /></div>
                 <div><People /></div>
                 <div><TheGame /></div>
            </div>
      )
}

export default Cotegory