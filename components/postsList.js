import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, getPostsFetch } from "../features/post/postSlice";
import { Card, Grid, CardContent, Typography } from "@mui/material";

const postsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);

  console.log("loading check", isLoading);

  useEffect(() => {
    dispatch(getPostsFetch());
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div style={{ padding: "1rem" }}>
      {isLoading ? (
        <h2 style={{ fontWeight: "700", textAlign: "center" }}>Loading...</h2>
      ) : (
        <>
          {posts.slice(0, 10).map((post) => (
            <Link href={`/blogpost/${post.id}`}>
              <Grid
                container
                justifyContent="center"
                key={post.id}
                spacing={10}
              >
                <Grid key={post.id} p={2} item xs={12} sm={6} md={4}>
                  <Card
                    style={{ cursor: "pointer" }}
                    sx={{ maxWidth: 345 }}
                    key={post.id}
                  >
                    <CardContent key={post.id}>
                      <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="darkblue"
                        component="div"
                      >
                        {post.body}
                      </Typography>
                      <br />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default postsList;
