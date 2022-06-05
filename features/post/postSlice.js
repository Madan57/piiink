import { createSlice } from "@reduxjs/toolkit";

import { api } from "../../pages/api/index";

export const fetchPosts = () => async (dispatch) => {
  try {
    await api
      .get("/posts")
      .then((response) => dispatch(postsSuccess(response.data)));
  } catch (e) {
    return console.error(e.message);
  }
};

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
  },
  reducers: {
    getPostsFetch: (state) => {
      state.isLoading = true;
    },

    postsSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
  },
});

export default postsSlice.reducer;
export const { postsSuccess, getPostsFetch } = postsSlice.actions;
