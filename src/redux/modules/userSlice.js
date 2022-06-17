import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//미들웨어
//login
export const loginUserDB = ({ users }) => {
  return async function (dispatch) {
    await axios
      //서버에 데이터 값 넣기
      .post("", users)
      .then((response) => {
        const accessToken = response.data.token;
        //서버에서 받은 토큰 저장
        localStorage.setItem("token", `${accessToken}`);
        // 저장된 토큰으로 login 여부 확인
        if (accessToken) {
          dispatch(loginUser(true));
        }
      })
      .catch(function (error) {
        // 로그인 실패 시 에러메시지
        window.alert(error.response.data.errorMessage);
      });
  };
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    list: [],
  },

  reducers: {
    loginUser: (state, action) => {
      state.isLogin = action.payload;
    },
    // updateUser(state, action) {},
    // removeUser(state, action) {},
    // saveUser(state, action) {},
  },
});

export const userActions = userSlice.actions;
export const { loginUser } = userSlice.actions;
export default userSlice.reducer;