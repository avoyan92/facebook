import React from "react";
import { useState } from "react";
import "../../contentCss/postitem.css";
import Comment from "./Comment.jsx";
import { comment } from "../../../../API/FaceServer";

const Comments = ({ commentWindow, setCommentWindow }) => {
  const [adedComment, setAdedComment] = useState(comment);
  const [value, setValue] = useState("");

  const addComment = () => {
    const newComment = {
      id: Date.now(),
      userName: "Gevorg Avoyan",
      img: "/facebook/profilicon.png",
      comment: value,
    };

    setAdedComment([...adedComment, newComment]);
    setCommentWindow(true);
    setValue("");
  };

 

  return (
    <div className="comment">
      <div className="commentinput">
        <img src="/facebook/profilicon.png" alt="photo" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Wrigth a comment"
        />
        <button onClick={addComment}>Add</button>
      </div>
      <div className={commentWindow ? "commentsdiv" : "divdisplay"}>
        {adedComment.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
      
    </div>
  );
};

export default Comments;
