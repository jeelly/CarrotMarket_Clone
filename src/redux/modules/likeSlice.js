import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import instance from "../../shared/axios";

// 좋아요 목록 가져오기
export const loadLikeDB = (id) => {
  return async function (dispatch) {
    try {
      const response = await instance.get(`/like/${id}`);
      console.log(response)
      const data = response.data
      dispatch(loadLike({data, id}));
    } catch (error) {}
  };
};

// 좋아요 누르기
export const toggleLikeDB = (id) => {
  return async function (dispatch) {
    try {
      const response = await instance.post(`/like/${id}`);
    } catch (error) {}
  };
};

const likeSlice = createSlice({
  name: 'like',
  initialState: {
    like: []
  },
  reducers: {
    loadLike: (state, action) => {
      state.like = action.payload;
    }
  },
});

export const likeActions = likeSlice.actions;
export const { loadLike, updateLike } = likeSlice.actions;
export default likeSlice.reducer;
