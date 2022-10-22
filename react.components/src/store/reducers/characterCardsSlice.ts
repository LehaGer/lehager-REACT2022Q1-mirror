import { ICardsSet, ICharacterInfo } from '../../types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CharacterService from '../../API/CharacterService';

export enum CARD_SET_STATUS {
  LOADING = 'LOADING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
}

const initialState: ICardsSet = {
  data: [],
  status: CARD_SET_STATUS.FULFILLED,
  error: null,
};

export const characterCardsSlice = createSlice({
  name: 'characterCards',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<ICharacterInfo[]>) {
      state.data = action.payload;
    },
    addCards(state, action: PayloadAction<ICharacterInfo[]>) {
      state.data = state.data.concat(action.payload);
    },
    clear() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CharacterService.getCharacterByAttributes.pending, (state) => {
        state.status = CARD_SET_STATUS.LOADING;
        state.error = null;
      })
      .addCase(CharacterService.getCharacterByAttributes.fulfilled, (state, action) => {
        state.status = CARD_SET_STATUS.FULFILLED;
        state.error = null;
        state.data = action.payload?.results || [];
      })
      .addCase(CharacterService.getCharacterByAttributes.rejected, (state, action) => {
        state.status = CARD_SET_STATUS.REJECTED;
        state.error = action.payload as string;
        state.data = [];
      });
  },
});

export default characterCardsSlice.reducer;
