import React from "react";
import "./contentCss/lentcontent.css";
import AddNewPost from "./lentcontent/AddNewPost";
import PostList from "./lentcontent/PostList";
import { postsArr } from "../../API/FaceServer";
import { useState } from "react";

const LentContent = ({searchValue}) => {
  const [posts, setPosts] = useState(postsArr);
  

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="lentcontent">
      <AddNewPost createPost={createPost} />

      <PostList searchValue={searchValue} remove={removePost} posts={posts} />
    </div>
  );
};

export default LentContent;
