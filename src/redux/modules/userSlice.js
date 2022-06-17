import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    //is_login 넣어서 함수,
    list: [],
    //is_login
  },
  reducers: {
    loginUser: (state, action) => {},
    // updateUser(state, action) {},
    // removeUser(state, action) {},
    // saveUser(state, action) {},
  },
});


export const { loginUser } = userSlice.actions;
export default userSlice.reducer;