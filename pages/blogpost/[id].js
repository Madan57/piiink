import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Card, CardContent, Typography, Button } from "@mui/material";
const id = ({ myBlog }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    setPost(myBlog);
    return () => {
      console.log("cleaned up");
    };
  }, [myBlog[0].id]);
  console.log("check check", post);
  return (
    <div style={{ padding: "1rem" }}>
      <Link href={`/posts`}>
        <Button
          variant="outlined"
          color="primary"
          style={{ marginBottom: "1rem" }}
        >
          Back to posts
        </Button>
      </Link>
      <Card
        style={{ cursor: "pointer" }}
        sx={{ maxWidth: 345 }}
        key={post[0]?.id}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post[0]?.title}
          </Typography>
          <Typography variant="body2" color="darkblue" component="div">
            {post[0]?.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  let data = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);

  let myBlog = await data.json();

  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}

export default id;
