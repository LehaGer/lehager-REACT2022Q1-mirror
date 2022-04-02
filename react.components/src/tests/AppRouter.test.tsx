import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import { renderWithRouter } from './functions/renderRouter';
import Navbar from '../components/Navbar/Navbar';

describe('Router testing', () => {
  test('is "Main" is an initial page', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
  });

  test('test "Main" link', () => {
    renderWithRouter(<Navbar />, '/some-not-main-page');
    expect(screen.queryByTestId('mainPage')).not.toBeInTheDocument();
    const mainLink = screen.getByTestId('mainLink');
    userEvent.click(mainLink);
    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
  });

  test('test "About" link', () => {
    renderWithRouter(<Navbar />, '/some-not-about-page');
    const aboutLink = screen.getByTestId('aboutLink');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('aboutPage')).toBeInTheDocument();
  });

  test('test "NotFound" link', () => {
    renderWithRouter(<Navbar />, '/some-not-notfound-page');
    const notFoundLink = screen.getByTestId('notFoundLink');
    userEvent.click(notFoundLink);
    expect(screen.getByTestId('notFoundPage')).toBeInTheDocument();
  });

  test('test on entering wrong URL directly', () => {
    renderWithRouter(<Navbar />, '/some-not-existing-page');
    expect(screen.getByTestId('notFoundPage')).toBeInTheDocument();
  });
});
