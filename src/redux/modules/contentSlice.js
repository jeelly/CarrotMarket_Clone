import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import instance from "../../shared/axios";

//미들웨어
// 게시글 불러오기
export const loadContentDB = (page) => {
  return async function (dispatch, getState) {
    const response = await instance.get(`/post/all/region`, { params: {page:page} });
    const data = getState().content.list
    const newstate = [...data, ...response.data.content];
    const pages = page + 1;
    dispatch(loadContent({newstate, pages}));
  };
};
//인기 게시글 불러오기
export const loadTopContentDB = (page) => {
  return async function (dispatch, getState) {
    const response = await instance.get(`/post/top/all/region`, { params: {page:page} });
    const data = getState().content.toplist
    const newstate = [...data, ...response.data.content];
    const pages = page + 1;
    dispatch(loadTopContent({newstate, pages}));
  };
};

//디테일 페이지 불러오기
export const DetailContentDB = (id) => {
  return async function (dispatch) {
    const response = await instance.get(`/post/detail/${id}`,);
    console.log(response.data)
    dispatch(DetailContent(response.data));
  };
};

// 게시글 삭제
export const removeContentDB = (targetId) => {
  console.log(targetId)
  return async function (dispatch) {
    try {
      await instance.delete(`/post/${targetId}`);
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
      await instance.post("/post/", data);
      // console.log(response.data, data)
      //서버에서 보내주는 데이터 넣기 
    } catch (error) {
      alert(error);
    }
  };
};

// 게시글 수정
//Update
export const updateContentDB = (contents_obj, id) => {
  return async function (dispatch) {
    console.log('업데이트', contents_obj);
    await instance
      .patch(`/post/${id}`, contents_obj)
      .then(response => {
        console.log(response)
      })
      .catch(function (error) {
        console.log('에러', error.response.data);
      });
    dispatch(updateContent(contents_obj, id));
  };
};

//add count
export const addCountDB = (data) => {
  return async function (dispatch) {
    console.log(data)
    const response = await instance.get(`/post/detail/${data.id}`,);
    const newlikeCount = (response.data.likeCount)
    dispatch(addCount({newlikeCount, data}));
  };
};


const userSlice = createSlice({
  name: "content",
  initialState: {
    //is_login 넣어서 함수,
    list: [],
    toplist: [],
    detail: [],
    pages:0,
    top_pages:0,
    likeCnt:0,
    //is_login
  },
  reducers: {
    loadContent: (state, action) => {
      console.log(action.payload)
      state.list = [...action.payload.newstate];
      state.pages = action.payload.pages;
    },
    loadTopContent: (state, action) => {
      state.toplist = [...action.payload.newstate];
      state.top_pages = action.payload.pages;
    },
    DetailContent: (state, action) => {
      console.log(action.payload)
      state.detail = action.payload
    },
    removeContent(state, action) {
      const list_del = state.list.find((content) => content.id === action.payload);
      const toplist_del = state.toplist.find((content) => content.id === action.payload);
      if (list_del) {
        state.list = state.list.filter((content) => content.id !== action.payload
        );
      } 
      if (toplist_del) {
        state.toplist = state.toplist.filter((content) => content.id !== action.payload)
      }
    },
    addContent: (state, action) => {
      state.list.push(action.payload);
    },
    updateContent: (state, action) => {
      const newState = state.list.filter((l, idx) => {
        return l.id !== action.payload.id;
      });
      console.log(action.payload)
      const newwState = [...newState, action.payload];
      state.list = newwState;
    },
    addCount: (state, action) => {
      if(state.list.find((content) => content.id === action.payload.data.id)) {
        const newCount = state.list.find((content) => content.id === action.payload.data.id);
        newCount.likeCount = action.payload.newlikeCount
      }else if(state.toplist.find((content) => content.id === action.payload.data.id)) {
        const newTopCount = state.toplist.find((content) => content.id === action.payload.data.id);
        newTopCount.likeCount = action.payload.newlikeCount
      }else {
        state.detail.likeCount = action.payload.newlikeCount
      }
    }
  },
});

export const { loadContent, loadTopContent, DetailContent, removeContent, addContent, updateContent, addCount} = userSlice.actions;
export default userSlice.reducer;
