import React, { createContext } from 'react';
import { IInitialState } from '../types/interfaces';
import { ActionType } from '../reducers/mainReducer';

export const initialState: IInitialState = {
  characterQuery: '',
  characterCards: [],
  formFields: {
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
  },
  formCards: [],
  cardFilter: {},
  pagination: {
    pageCapacity: 20,
  },
};

export const AppContext = createContext<{
  state: IInitialState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});
