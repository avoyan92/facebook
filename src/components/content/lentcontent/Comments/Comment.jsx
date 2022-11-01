import React from "react";
import { useState } from "react";
import "../../contentCss/postitem.css";

const Comment = ({ img, userName, comment }) => {
  const [active, setActive] = useState(false);
  const [replayWindow, setReplayWindow] = useState(false);
  const [value, setValue] = useState("");
  const [replayComment, setReplayComment] = useState([]);
  const openReplayWindow = () => setReplayWindow(!replayWindow);

  const [like, setLike] = useState(0);

  const addNewStayle = () => {
    setActive(!active);
    if (active) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
  };

  const replayToComment = () => {
    const answer = {
      userName,
      value: value
    };

    setReplayComment([answer]);
    setValue('')
    setReplayWindow(false)
    
  };

 



  return (
    <div className="addedcomentdiv">
      <div className="commentdiv">
        <img src={img} />
        <div className="first">
          <div className="firstspan">
            <h5>{userName}</h5>
            <p>{comment}</p>
          </div>
          <div className="seconddiv">
            <div className="seconddiv--div">
              <p
                onClick={addNewStayle}
                style={{ color: active ? "#2078f4" : "" }}
              >
                Like
              </p>
              {like > 0 && <p>{like}</p>}
            </div>
            <p style={{ marginLeft: 5 }} onClick={openReplayWindow}>
              Replay
            </p>
          </div>
        </div>
      </div>
      {replayComment.length > 0 && (
        replayComment.map(r => (
            <div className="replaydiv">
          <img src="/facebook/profilicon.png" style={{width: 24, height: 24, borderRadius: 50}}/>
          <div>
            <h6>Gevorg Avoyan</h6>
            <h5>{r.userName}</h5>
            <p>{r.value}</p>
          </div>
        </div>
        ))
      )}
      <div
        className={
          replayWindow ? "replaycommentinput" : "replaycommentinputDisplay"
        }
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="answer"
        />
        <button onClick={replayToComment}>Replay</button>
      </div>
    </div>
  );
};

export default Comment;
