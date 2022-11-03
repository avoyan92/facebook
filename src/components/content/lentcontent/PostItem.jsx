import React from "react";
import Comments from "./Comments/Comments";
import { useState } from "react";
import "../contentCss/postitem.css";
import RemovePostWindow from "../modalWindow/RemovePostWindow";

const PostItem = ({
  title,
  newsFrom,
  image,
  newsFromImg,
  aboutTitle,
  dataTime,
  remove,
  likeCount,
  id,
  post,
}) => {
  const [active, setActive] = useState(false);

  const [commentWindow, setCommentWindow] = useState(false);
  const [like, setLike] = useState(likeCount);
  const [removeWindow, setRemoveWindow] = useState(false);
  const [statusLike, setStatusLike] = useState(0)

  const openCommentWindow = () => {
    setCommentWindow(!commentWindow);
  };
  const openRemoveWindow = () => setRemoveWindow(!removeWindow);

  const likeCountChange = () => {
    if (active) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
  };

  const addNewStayle = () => {
    setActive(!active);
    likeCountChange();
  };

  return (
    <div className="postitem">
      <div className="posthead">
        <div className="postheadtitle">
          <span>
            <img src={newsFromImg} alt="foto" />
            <div>
              <h4>{newsFrom}</h4>
              <p style={{ fontSize: 13, color: "#65676b" }}>{dataTime} min</p>
            </div>
          </span>
        </div>
        <RemovePostWindow
          post={post}
          remove={remove}
          removeWindow={removeWindow}
        />
        <div className="redact" onClick={openRemoveWindow}>
          <h2>...</h2>
        </div>
      </div>
      <p className="t">{title}</p>
      <div className="postimage">
        {image && <img src={image} alt="photo" />}
      </div>
      {aboutTitle && (
        <div className="abouttitle">
          <h4>{aboutTitle}</h4>
        </div>
      )}
      <div className="likecount">
        <img src="/facebook/apiimg/like.png" alt="photo" />
        {like > 0 && (<p style={{ marginLeft: 5 }}>{like}</p>)}
      </div>
      <div className="line"></div>
      <div className="footer">
        <div>
          <div className="like" onClick={addNewStayle}>
            <span className="likeimg"></span>
            <p style={{ color: active ? "#2078f4" : "" }}>Like</p>
          </div>
        </div>
        <div onClick={openCommentWindow}>
          <span className="commentimg"></span>
          <p>Comment</p>
        </div>
        <div>
          <span className="shereimg"></span>
          <p>Shere</p>
        </div>
      </div>
      <div className="line"></div>
      <Comments
        commentWindow={commentWindow}
        setCommentWindow={setCommentWindow}
      />
    </div>
  );
};

export default PostItem;
