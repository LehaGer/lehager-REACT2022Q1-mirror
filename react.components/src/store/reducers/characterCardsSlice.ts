import { ICharacterInfo } from '../../types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ICharacterInfo[] = [];

export const characterCardsSlice = createSlice({
  name: 'characterCards',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<ICharacterInfo[]>) {
      return action.payload;
    },
    addCards(state, action: PayloadAction<ICharacterInfo[]>) {
      return state.concat(action.payload);
    },
    clear() {
      return [];
    },
  },
});

export default characterCardsSlice.reducer;
