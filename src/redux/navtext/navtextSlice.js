import { createSlice } from '@reduxjs/toolkit';

const navtextSlice = createSlice({
  name: 'navtext',
  initialState: {
    current: 1,
    textarr: [
      '30-DAY SATISFACTION GUARANTEE',
      'Free delivery on orders over $40.00',
      '50.000+ HAPPY CUSTOMERS',
      '100% Money Back Guarantee'
    ]
  },
  reducers: {
    next: (state) => {
      state.current += 1;
      if (state.current >= state.textarr.length) {
        state.current = 0;
      }
    },
    prev: (state) => {
      state.current -= 1;
      if (state.current < 0) {
        state.current = state.textarr.length - 1;
      }
    },
  },
});

export const { next, prev } = navtextSlice.actions;

export default navtextSlice.reducer;
