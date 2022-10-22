import { IFormsState } from '../types/interfaces';

export enum formFieldsReducerActionVariants {
  SET_FORMS_FIELDS = 'SET_FORMS_FIELDS',
}
export interface IFormFieldsReducerAction {
  type: formFieldsReducerActionVariants;
  payload: IFormsState;
}

export const formFieldsReducer = (state: IFormsState, action: IFormFieldsReducerAction) => {
  switch (action.type) {
    case formFieldsReducerActionVariants.SET_FORMS_FIELDS:
      return <IFormsState>action.payload;
    default:
      return <IFormsState>state;
  }
};
