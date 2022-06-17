import { createSlice } from "@reduxjs/toolkit";
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
  },
});


export const { loadContent } = userSlice.actions;
export default userSlice.reducer;