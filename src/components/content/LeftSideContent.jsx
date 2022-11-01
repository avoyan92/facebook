import React from "react";
import { useState } from "react";
import "./contentCss/leftside.css";
import FirstWindow from "./modalWindow/FirstWindow";

const LeftSideContent = () => {
  const [open, setOpen] = useState(false);

  const openWindow = () => {
    setOpen(true);
  };

  const closeWindow = () => {
    setOpen(false);
  };

  return (
    <div className="leftside">
      <div className="content--div">
        <img
          style={{ borderRadius: 50, cursor: "pointer" }}
          src="/facebook/profilicon.png"
          alt="photo"
        />

        <h4>Gevorg Avoyan</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" />
        <h4>Друзья</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png" />
        <h4>Группы</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png" />
        <h4>Marketplace</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png" />
        <h4>Watch</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/tYxGXJRPH5q.png" />
        <h4>Воспоминания</h4>
      </div>
      {open ? (
        <FirstWindow closeWindow={closeWindow} />
      ) : (
        <div className="content--div">
          <div className="open">
            <img
              className="open"
              src="https://icons-for-free.com/iconfiles/png/128/down+expand+expand+more+expandmore+icon-1320185733183690947.png"
              alt="photo"
            />
          </div>
          <h4 onClick={openWindow}>Показать больше</h4>
        </div>
      )}
    </div>
  );
};

export default LeftSideContent;
