import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: { isopen: false, text: 'Discount claimed!' },
});

export default popupSlice.reducer;
