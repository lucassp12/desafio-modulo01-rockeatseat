import React, { Component } from "react";

import "./style.scss";

import PostHeader from "../postHeader/index";

const Post = ({ data }) => (
  <div className="post">
    <PostHeader avatar={data.avatar} name={data.name} time={data.time} />
    <div className="description">
      <p>{data.body}</p>
    </div>
  </div>
);
export default Post;
