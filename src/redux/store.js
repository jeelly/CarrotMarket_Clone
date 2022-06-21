import { configureStore } from '@reduxjs/toolkit';
import userReducer from './modules/userSlice';
import contentReducer from './modules/contentSlice';
import likeReducer from './modules/likeSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer,
    like: likeReducer,
  },
});

export default store;
