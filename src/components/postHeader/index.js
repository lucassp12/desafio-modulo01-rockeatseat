import React from "react";

import "./style.scss";

const PostHeader = ({ avatar, name, time }) => (
  <div className="post-header-container">
    <img src={avatar} alt="avatar" />
    <div className="data-container">
      <strong>{name} </strong>
      <span>{time}</span>
    </div>
  </div>
);
export default PostHeader;
