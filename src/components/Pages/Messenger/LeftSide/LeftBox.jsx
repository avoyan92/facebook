import React from "react";
import Search from "../../../../icons/Search";
import { usersList } from "./../../../../API/usersList";
import "../LeftSide/leftside.css";
import { useState } from "react";
const LeftBox = ({changeUser}) => {
  
  const [serchedUser, setSerchedUser] = useState('')

  const search = (p) => {
    if(p.name.toLowerCase().includes(serchedUser.toLowerCase())){
      return true
    }
    return false
  }
  
  return (
    <div className="leftbox">
      <div className="searchbox">
        <div className="chat">
          <h2>Chats</h2>
          <div>
            <div className="chat-item">
              <div className="options"></div>
            </div>
            <div className="chat-item">
              <div className="new-rooms"></div>
            </div>
            <div className="chat-item">
              <div className="send-chat"></div>
            </div>
          </div>
        </div>
        <div className="searchdiv">
          <Search />
          <input 
          value={serchedUser}
          onChange={(e) => setSerchedUser(e.target.value)}
          type="text" />
        </div>
      </div>
      <div className="userlist">
        {usersList.filter(search).map((user) => (
          <div onClick={() => changeUser(user)} key={user.id} className="user">
            <img
              style={{ width: 45, height: 45, borderRadius: 50 }}
              src={user.img}
            />
            <div>
              <p>{user.name}</p>
              <p>{user.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftBox;
