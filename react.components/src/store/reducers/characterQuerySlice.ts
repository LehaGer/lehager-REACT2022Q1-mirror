import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const characterQuerySlice = createSlice({
  name: 'characterQuery',
  initialState,
  reducers: {
    setSearchString(state, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export default characterQuerySlice.reducer;
