import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

export const AppProvider: FC = ({ children }) => {
  const store = setupStore();

  return <Provider store={store}>{children}</Provider>;
};
