import React, { useState } from "react";
import axios from "axios";
import PostList from "../components/postsList";

const Posts = ({ data }) => {
  return (
    <div>
      <PostList />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = await res.data;
  return {
    props: { data },
  };
}

export default Posts;
