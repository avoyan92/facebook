import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "../../icons/AppsIcon";
import Messages from "../../icons/Messages";
import Notification from "../../icons/Notification";
import "./headercss/massigebox.css";

const MassageBox = () => {
  return (
    <div className="messige">
      <div>
        <AppsIcon />
      </div>
      <div>
        <Link to="messinger">
          <Messages />
        </Link>
      </div>
      <div>
        <Notification />
      </div>

      <img
        style={{ borderRadius: 50, cursor: "pointer" }}
        src="/facebook/profilicon.png"
        alt="photo"
        width={37}
        height={37}
      />
    </div>
  );
};

export default MassageBox;
