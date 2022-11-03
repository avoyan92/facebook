import React from "react";
import Search from "../../../../icons/Search";
import "./CSS/messigelist.css";
import MessigeItem from "./MessigeItem";
import { useState } from "react";
import { usersList } from "../../../../API/usersList";

const MessigeList = () => {
      const [users, setUsers] = useState(usersList)
  return (
    <div className="massegelist">
      <h3 style={{ color: "#66686c" }}>Реклама</h3>
      <div className="lin"></div>
      <div className="searcdiv">
        <h3 style={{ color: "#66686c" }}>Контакты</h3>
        <Search />
      </div>
      {users.map(user => (
            <MessigeItem key={user.id} {...user}/>
      ))}
    </div>
  );
};

export default MessigeList;
