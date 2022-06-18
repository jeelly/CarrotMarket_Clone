import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import instance from '../../shared/axios';

//미들웨어
// 게시글 불러오기
export const loadContentDB = () => {
    return async function (dispatch) {
        const response = await instance.get(`/content/`);
        const newstate = [...response.data];
        dispatch(loadContent(newstate));
      }
    };
// 게시글 삭제
export const removeContentDB = targetId => {
  return async function (dispatch) {
    try {
      await instance.delete(`/content/${targetId}`);
      dispatch(removeContent(targetId));
    } catch (error) {
      console.log(error);
    }
  };
};

const userSlice = createSlice({
  name: "content",
  initialState: {
    //is_login 넣어서 함수,
    list: [],
    //is_login
  },
  reducers: {
    loadContent: (state, action) => {
        state.list = [...action.payload]
    },
    removeContent(state, action) {
      console.log(action.payload)
      const del = state.list.find(content => content.id === action.payload);
      console.log(state.list);
      if (del) {
        state.list = state.list.filter(content => content.id !== action.payload);
      }
    }
  },
});


export const { loadContent, removeContent } = userSlice.actions;
export default userSlice.reducer;