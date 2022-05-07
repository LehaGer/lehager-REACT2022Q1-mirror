import { IFormsCardProps } from '../types/interfaces';

export enum formCardsReducerActionVariants {
  SET_CARDS = 'SET_CARDS',
}
export interface IFormCardsReducerAction {
  type: formCardsReducerActionVariants;
  payload: IFormsCardProps[];
}

export const formCardsReducer = (state: IFormsCardProps[], action: IFormCardsReducerAction) => {
  switch (action.type) {
    case formCardsReducerActionVariants.SET_CARDS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
