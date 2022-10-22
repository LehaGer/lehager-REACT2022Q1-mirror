import { characterQueryGender, characterStatus, ICardFilter } from '../../types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ICardFilter = {};

export const cardFilterSlice = createSlice({
  name: 'cardFilter',
  initialState,
  reducers: {
    setCharacterStatus(state, action: PayloadAction<characterStatus | undefined>) {
      state.status = action.payload;
    },
    setCharacterGender(state, action: PayloadAction<characterQueryGender | undefined>) {
      state.gender = action.payload;
    },
    setCharacterSpecies(state, action: PayloadAction<string | undefined>) {
      state.species = action.payload;
    },
  },
});

export default cardFilterSlice.reducer;
