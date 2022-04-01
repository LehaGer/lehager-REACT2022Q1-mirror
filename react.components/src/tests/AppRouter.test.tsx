import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import Navbar from '../components/Navbar/Navbar';
import { renderWithRouter } from './functions/renderWithRouter';

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
    renderWithRouter(<Navbar />);
    const aboutLink = screen.getByTestId('aboutLink');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('aboutPage')).toBeInTheDocument();
  });

  test('test "NotFound" link', () => {
    renderWithRouter(<Navbar />);
    const notFoundLink = screen.getByTestId('notFoundLink');
    userEvent.click(notFoundLink);
    expect(screen.getByTestId('notFoundPage')).toBeInTheDocument();
  });

  test('test "Wrong" link', () => {
    renderWithRouter(<Navbar />);
    const wrongLink = screen.getByTestId('wrongLink');
    userEvent.click(wrongLink);
    expect(screen.getByTestId('notFoundPage')).toBeInTheDocument();
  });

  test('test on entering wrong URL directly', () => {
    renderWithRouter(null, '/some-not-existing-page');
    expect(screen.getByTestId('notFoundPage')).toBeInTheDocument();
  });
});
