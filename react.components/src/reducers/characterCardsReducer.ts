import { ICharacterRowInfo } from '../types/interfaces';

export enum characterCardsReducerActionVariants {
  SET_CARDS = 'SET_CARDS',
}

export interface ICharacterCardsReducerAction {
  type: characterCardsReducerActionVariants;
  payload: ICharacterRowInfo[];
}

export const characterCardsReducer = (
  state: ICharacterRowInfo[],
  action: ICharacterCardsReducerAction
) => {
  switch (action.type) {
    case characterCardsReducerActionVariants.SET_CARDS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
