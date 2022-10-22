import { ICardFilter } from '../types/interfaces';

export enum cardFilterReducerActionVariants {
  SET_CHARACTER_STATUS = 'SET_CHARACTER_STATUS',
  SET_CHARACTER_GENDER = 'SET_CHARACTER_GENDER',
  SET_CHARACTER_SPECIES = 'SET_CHARACTER_SPECIES',
}
export interface ICardFilterReducerAction {
  type: cardFilterReducerActionVariants;
  payload: ICardFilter;
}

export const cardFilterReducer = (state: ICardFilter, action: ICardFilterReducerAction) => {
  switch (action.type) {
    case cardFilterReducerActionVariants.SET_CHARACTER_STATUS:
      return <ICardFilter>{ ...state, status: action.payload.status };
    case cardFilterReducerActionVariants.SET_CHARACTER_GENDER:
      return <ICardFilter>{ ...state, gender: action.payload.gender };
    case cardFilterReducerActionVariants.SET_CHARACTER_SPECIES:
      return <ICardFilter>{ ...state, species: action.payload.species };
    default:
      return <ICardFilter>state;
  }
};
