import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import Navbar from '../components/UI/Navbar/Navbar';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Router testing', () => {
  test('test if "Main" is an initial page', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
  });

  test('test "Main" link', () => {
    renderWithRouter(<Navbar />, '/some-not-main-page');
    expect(screen.queryByTestId('mainPage')).not.toBeInTheDocument();
    const mainLink = screen.getByTestId('main-link');
    userEvent.click(mainLink);
    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
  });

  test('test "About" link', () => {
    renderWithRouter(<Navbar />);
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('test "NotFound" link', () => {
    renderWithRouter(<Navbar />);
    const notFoundLink = screen.getByTestId('not-found-link');
    userEvent.click(notFoundLink);
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });

  test('test "Wrong" link', () => {
    renderWithRouter(<Navbar />);
    const wrongLink = screen.getByTestId('wrong-link');
    userEvent.click(wrongLink);
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });

  test('test on entering wrong URL directly', () => {
    renderWithRouter(null, '/some-not-existing-page');
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
