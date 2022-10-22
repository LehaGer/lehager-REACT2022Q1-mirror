import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormsState } from '../../types/interfaces';

const initialState: IFormsState = {
  firstName: {
    value: '',
    hasError: undefined,
  },
  lastName: {
    value: '',
    hasError: undefined,
  },
  zipCode: {
    value: '',
    hasError: undefined,
  },
  birthday: {
    value: '',
    hasError: undefined,
  },
  arrivingDate: {
    value: '',
    hasError: undefined,
  },
  country: {
    value: '',
    hasError: undefined,
  },
  isAgreeToProcConfData: {
    value: false,
    hasError: undefined,
  },
  isAgreeToGetAdvToEmail: {
    value: false,
    hasError: undefined,
  },
  gender: {
    value: null,
    hasError: undefined,
  },
  profilePicture: {
    value: null,
    hasError: undefined,
  },
  isSubmitButtonDisabled: true,
};

export const formFieldsSlice = createSlice({
  name: 'formFields',
  initialState,
  reducers: {
    setFormsFields(state, action: PayloadAction<IFormsState>) {
      return action.payload;
    },
  },
});

export default formFieldsSlice.reducer;
