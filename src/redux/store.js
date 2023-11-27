import { configureStore } from '@reduxjs/toolkit';
import navtextReducer from './navtext/navtextSlice';

const store = configureStore({
  reducer: {
    navtext: navtextReducer,
  },
});

export default store;
