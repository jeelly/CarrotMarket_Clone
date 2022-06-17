import { configureStore } from '@reduxjs/toolkit';
import userReducer from './modules/userSlice';
import contentReducer from './modules/contentSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer,
  },
});

export default store;
