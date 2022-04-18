import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../components/AppRouter';

export const createWithRouter = (component: JSX.Element | null, initialRoute = '/') => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
