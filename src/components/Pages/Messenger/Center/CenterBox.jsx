import React from "react";
import '../Center/centerbox.css'
import BoxMain from "./BoxMain";
// import  io  from "socket.io-client";

// const socket = io('http://localhost:8888/rooms')

const CenterBox = ({obj}) => {
 
  
  return (
    <div className="centerbox">
      {obj.map((item, ) => (
        <div key={item.id}>
         <div className="boxhead" >
        <img style={{width: 45, height: 45, borderRadius: 50}} src={item.img} />
        <h4>{item.name}</h4>
      </div>
      <div className="massagebox"></div>
      <BoxMain/></div>
      ))}
    </div>
  
  );
};

export default CenterBox;