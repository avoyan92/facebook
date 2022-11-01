import React, { useState } from "react";
import { time } from "../../../API/FaceServer";
import "../contentCss/lentcontent.css";

const AddNewPost = ({ createPost }) => {
  const [value, setValue] = useState("");

  const newPostAdd = () => {
    const newPost = {
      id: Date.now(),
      newsFrom: "Gevorg Avoyan",
      dataTime: time,
      newsFromImg: "/facebook/profilicon.png",
      title: value,
    };
    if (value.length > 0) {
      createPost(newPost)
    }

    setValue("");
  };

  return (
    <div className="contentinput">
      <img src="/facebook/profilicon.png" alt="photo" />
      <input
        type="text"
        placeholder="What a new Grvorg?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={newPostAdd}>Add</button>
    </div>
  );
};

export default AddNewPost;
