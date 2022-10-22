import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormsCardProps } from '../../types/interfaces';

const initialState: IFormsCardProps[] = [];

export const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    setFormCards(state, action: PayloadAction<IFormsCardProps[]>) {
      return action.payload;
    },
    addFormCards(state, action: PayloadAction<IFormsCardProps[]>) {
      return state.concat(action.payload);
    },
    clear() {
      return [];
    },
  },
});

export default formCardsSlice.reducer;
