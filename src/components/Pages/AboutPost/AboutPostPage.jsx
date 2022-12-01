import React from "react";
import { useParams } from "react-router-dom";
import { postsArr } from "../../../API/FaceServer";
import '../AboutPost/aboutpost.css'


const AboutPostPage = () => {
  const { id } = useParams();
  const post = postsArr.find((obj) => obj.id === +id);
  console.log(post.about);

  

  return (
    <div className="aboutpost">
      <h1>{post.title}</h1>
      <h2>{post.aboutTitle}</h2>
      <div><img src={post.image} /></div>
      <p>{post.about}</p>
    </div>
  );
};

export default AboutPostPage;
