export enum characterQueryReducerActionVariants {
  SET_SEARCH_STR = 'SET_SEARCH_STR',
}
export interface ICharacterQueryReducerAction {
  type: characterQueryReducerActionVariants;
  payload: string;
}

export const characterQueryReducer = (state: string, action: ICharacterQueryReducerAction) => {
  switch (action.type) {
    case characterQueryReducerActionVariants.SET_SEARCH_STR:
      return action.payload;
    default:
      return state;
  }
};
