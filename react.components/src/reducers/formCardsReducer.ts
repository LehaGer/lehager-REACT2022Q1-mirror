import { IFormsCardProps } from '../types/interfaces';

export enum formCardsReducerActionVariants {
  SET_FORM_CARDS = 'SET_FORM_CARDS',
  ADD_FORM_CARDS = 'ADD_FORM_CARDS',
  CLEAR_FORM_CARDS = 'CLEAR_FORM_CARDS',
}
export interface IFormCardsReducerAction {
  type: formCardsReducerActionVariants;
  payload: IFormsCardProps[];
}

export const formCardsReducer = (state: IFormsCardProps[], action: IFormCardsReducerAction) => {
  switch (action.type) {
    case formCardsReducerActionVariants.SET_FORM_CARDS:
      return [...action.payload];
    case formCardsReducerActionVariants.ADD_FORM_CARDS:
      return [...state, ...action.payload];
    case formCardsReducerActionVariants.CLEAR_FORM_CARDS:
      return [];
    default:
      return state;
  }
};
