import { IFormsCardProps } from '../types/interfaces';

export enum formFieldsReducerActionVariants {
  SET_FORMS_FIELDS = 'SET_FORMS_FIELDS',
}
export interface IFormFieldsReducerAction {
  type: formFieldsReducerActionVariants;
  payload: IFormsCardProps;
}

export const formFieldsReducer = (state: IFormsCardProps, action: IFormFieldsReducerAction) => {
  switch (action.type) {
    case formFieldsReducerActionVariants.SET_FORMS_FIELDS:
      return <IFormsCardProps>action.payload;
    default:
      return <IFormsCardProps>state;
  }
};
