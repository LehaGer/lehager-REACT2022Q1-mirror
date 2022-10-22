import React, { FC, useReducer } from 'react';
import { mainReducer } from '../../reducers/mainReducer';
import { AppContext, initialState } from '../../context/AppContext';

export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppContext;
