import { characterQueryReducer, ICharacterQueryReducerAction } from './characterQueryReducer';
import { characterCardsReducer, ICharacterCardsReducerAction } from './characterCardsReducer';
import { formFieldsReducer, IFormFieldsReducerAction } from './formFieldsReducer';
import { formCardsReducer, IFormCardsReducerAction } from './formCardsReducer';
import { IInitialState } from '../types/interfaces';
import { cardFilterReducer, ICardFilterReducerAction } from './cardFilterReducer';
import { IPaginationReducerAction, paginationReducer } from './paginationReducer';

export type ActionType =
  | ICharacterQueryReducerAction
  | ICharacterCardsReducerAction
  | IFormFieldsReducerAction
  | IFormCardsReducerAction
  | ICardFilterReducerAction
  | IPaginationReducerAction;

export const mainReducer = (
  { characterQuery, characterCards, formFields, formCards, cardFilter, pagination }: IInitialState,
  action: ActionType
): IInitialState => ({
  characterQuery: characterQueryReducer(characterQuery, action as ICharacterQueryReducerAction),
  characterCards: characterCardsReducer(characterCards, action as ICharacterCardsReducerAction),
  formFields: formFieldsReducer(formFields, action as IFormFieldsReducerAction),
  formCards: formCardsReducer(formCards, action as IFormCardsReducerAction),
  cardFilter: cardFilterReducer(cardFilter, action as ICardFilterReducerAction),
  pagination: paginationReducer(pagination, action as IPaginationReducerAction),
});
