import { ICharacterNavigationInfo, IPagination } from '../../types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IPagination = {
  pageCapacity: 20,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPageCapacity: (state, action: PayloadAction<number>) => {
      state.pageCapacity = action.payload;
    },
    setPageCount: (state, action: PayloadAction<number>) => {
      state.pagesCount = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setNavigationInfo: (state, action: PayloadAction<ICharacterNavigationInfo>) => {
      state.navigationInfo = action.payload;
      state.pagesCount = action?.payload?.count
        ? Math.ceil(action?.payload?.count / state.pageCapacity)
        : 0;
    },
  },
});

export default paginationSlice.reducer;
