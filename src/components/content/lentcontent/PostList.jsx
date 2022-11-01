import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, remove, searchValue}) => {


  return (
    <div className="postlist">
      {posts.filter(p => {
        if(p.newsFrom.toLowerCase().includes(searchValue.toLowerCase())){
          return true
        }
        return false
      }).map((post,index) => (
        <PostItem 
        key={post.id} {...post}  
        number={index + 1}
        remove={remove}
        post ={post}
        />
      ))}
    </div>
  );
};

export default PostList;
