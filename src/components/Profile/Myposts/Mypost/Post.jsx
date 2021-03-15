import React from "react";

import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.items}>
        {props.message}
        <span>{props?.like ? ` like: ${props.like}` : ""}</span>
        <span>{props?.dislike ? ` dislike: ${props.dislike}` : ""}</span>
      </div>
    </div>
  );
};

export default Post;
