import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../components/AppRouter';
import { render } from '@testing-library/react';

export const renderWithRouter = (component: JSX.Element | null, initialRoute = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
