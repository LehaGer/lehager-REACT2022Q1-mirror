import { ICharacterNavigationInfo, IPagination } from '../../types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getAllCharacters from '../../API/CharacterService';

const initialState: IPagination = {
  pageCapacity: 20,
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPageCapacity: (state, action: PayloadAction<number>) => {
      state.pageCapacity = isFinite(action.payload) ? action.payload : initialState.pageCapacity;
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
        ? Math.ceil(action?.payload?.count / state.pageCapacity) || 0
        : 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacters.getCharacterByAttributes.fulfilled, (state, action) => {
        state.navigationInfo = action.payload?.info;
        state.pagesCount =
          action?.payload?.info?.count && isFinite(action?.payload?.info?.count)
            ? Math.ceil(action?.payload?.info?.count / state.pageCapacity)
            : 0;
      })
      .addCase(getAllCharacters.getCharacterByAttributes.rejected, (state) => {
        state.pagesCount = 0;
      });
  },
});

export default paginationSlice.reducer;
