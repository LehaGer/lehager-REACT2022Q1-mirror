import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import cardFilterReducer from './reducers/cardFilterSlice';
import paginationReducer from './reducers/paginationSlice';
import characterCardsReducer from './reducers/characterCardsSlice';
import characterQueryReducer from './reducers/characterQuerySlice';
import formCardsReducer from './reducers/formCardsSlice';
import formFieldsReducer from './reducers/formFieldsSlice';

const rootReducer = combineReducers({
  cardFilterReducer,
  paginationReducer,
  characterCardsReducer,
  characterQueryReducer,
  formCardsReducer,
  formFieldsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
