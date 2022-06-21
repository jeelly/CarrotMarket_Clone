import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import instance from "../../shared/axios";

//미들웨어
// 게시글 불러오기
export const loadContentDB = (page) => {
  console.log(page)
  const pagess = page;
  console.log(pagess)
  return async function (dispatch, getState) {
    const response = await instance.get(`/post/all/region`, { params: {page:pagess} });
    console.log(response.data.content)
    const data = getState().content.list
    const newstate = [...data, ...response.data.content];
    const pages = page?page+1:1;
    dispatch(loadContent({newstate, pages}));
  };
};
//인기 게시글 불러오기
export const loadTopContentDB = (page) => {
  console.log(page)
  const pagess = page;
  console.log(pagess)
  return async function (dispatch, getState) {
    const response = await instance.get(`/post/top/all/region`, { params: {page:pagess} });
    const data = getState().content.list
    const newstate = [...data, ...response.data.content];
    const pages = page?page+1:1;
    dispatch(loadTopContent({newstate, pages}));
  };
};

// 게시글 삭제
export const removeContentDB = (targetId) => {
  return async function (dispatch) {
    try {
      await instance.delete(`/content/${targetId}`);
      dispatch(removeContent(targetId));
    } catch (error) {
      console.log(error);
    }
  };
};

// 게시글 추가하기
export const addContentDB = (data) => {
  return async function (dispatch) {
    try {
      await instance.post("/content/", data);
      // console.log(response.data, data)
      //서버에서 보내주는 데이터 넣기 
    } catch (error) {
      alert(error);
    }
  };
};

const userSlice = createSlice({
  name: "content",
  initialState: {
    //is_login 넣어서 함수,
    list: [],
    toplist: [],
    //is_login
  },
  reducers: {
    loadContent: (state, action) => {
      state.list = [...action.payload.newstate];
      state.pages = action.payload.pages;
      console.log(state.pages)
      console.log(state.list)
    },
    loadTopContent: (state, action) => {
      state.toplist = [...action.payload.newstate];
      state.pages = action.payload.pages;
      console.log(state.pages)
      console.log(state.toplist)
    },
    removeContent(state, action) {
      console.log(action.payload);
      const del = state.list.find((content) => content.id === action.payload);
      console.log(state.list);
      if (del) {
        state.list = state.list.filter(
          (content) => content.id !== action.payload
        );
      }
    },
    addContent: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { loadContent, removeContent, addContent, loadTopContent } = userSlice.actions;
export default userSlice.reducer;
