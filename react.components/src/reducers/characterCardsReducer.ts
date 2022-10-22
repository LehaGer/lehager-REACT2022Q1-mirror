import { ICharacterInfo } from '../types/interfaces';

export enum characterCardsReducerActionVariants {
  SET_CARDS = 'SET_CARDS',
  ADD_CARDS = 'ADD_CARDS',
  CLEAR = 'CLEAR',
}

export interface ICharacterCardsReducerAction {
  type: characterCardsReducerActionVariants;
  payload: ICharacterInfo[];
}

export const characterCardsReducer = (
  state: ICharacterInfo[],
  action: ICharacterCardsReducerAction
) => {
  switch (action.type) {
    case characterCardsReducerActionVariants.SET_CARDS:
      return [...action.payload];
    case characterCardsReducerActionVariants.ADD_CARDS:
      return [...state, ...action.payload];
    case characterCardsReducerActionVariants.CLEAR:
      return [];
    default:
      return state;
  }
};
