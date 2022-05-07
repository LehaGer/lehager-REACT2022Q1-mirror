import { characterQueryReducer, ICharacterQueryReducerAction } from './characterQueryReducer';
import { characterCardsReducer, ICharacterCardsReducerAction } from './characterCardsReducer';
import { formFieldsReducer, IFormFieldsReducerAction } from './formFieldsReducer';
import { formCardsReducer, IFormCardsReducerAction } from './formCardsReducer';
import { IInitialState } from '../types/interfaces';

export type ActionType =
  | ICharacterQueryReducerAction
  | ICharacterCardsReducerAction
  | IFormFieldsReducerAction
  | IFormCardsReducerAction;

export const mainReducer = (
  { characterQuery, characterCards, formFields, formCards }: IInitialState,
  action: ActionType
): IInitialState => ({
  characterQuery: characterQueryReducer(characterQuery, action as ICharacterQueryReducerAction),
  characterCards: characterCardsReducer(characterCards, action as ICharacterCardsReducerAction),
  formFields: formFieldsReducer(formFields, action as IFormFieldsReducerAction),
  formCards: formCardsReducer(formCards, action as IFormCardsReducerAction),
});
