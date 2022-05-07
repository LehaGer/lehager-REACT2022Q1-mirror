import React, { createContext } from 'react';
import { IFormsCardProps, IInitialState } from '../types/interfaces';
import { ActionType } from '../reducers/mainReducer';

export const initialState: IInitialState = {
  characterQuery: '',
  characterCards: [],
  formFields: {} as IFormsCardProps,
  formCards: [],
};

export const AppContext = createContext<{
  state: IInitialState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});
