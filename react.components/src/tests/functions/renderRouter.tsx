import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../components/AppRouter';
import { render } from '@testing-library/react';

export const renderRouter = (initialRoute = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
    </MemoryRouter>
  );
};
