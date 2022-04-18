import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import { createWithRouter } from './functions/createRouter';
import Navbar from '../components/Navbar/Navbar';
import { createWithLoadContext } from './functions/createLoadContext';

describe('Router testing', () => {
  test('is Loader showed before loading main page', () => {
    render(createWithLoadContext(createWithRouter(<Navbar />), true));
    expect(screen.getByTestId('Loader')).toBeInTheDocument();
    expect(screen.queryByTestId('mainPage')).not.toBeInTheDocument();
  });

  test('is "Main" an initial page', () => {
    render(createWithLoadContext(createWithRouter(<Navbar />), false));
    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
  });

  test('test "Main" link', () => {
    render(createWithLoadContext(createWithRouter(<Navbar />, '/some-not-main-page'), false));
    expect(screen.queryByTestId('mainPage')).not.toBeInTheDocument();
    const mainLink = screen.getByTestId('mainLink');
    userEvent.click(mainLink);
    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
  });

  test('test "About" link', () => {
    render(createWithLoadContext(createWithRouter(<Navbar />, '/some-not-about-page'), false));
    const aboutLink = screen.getByTestId('aboutLink');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('aboutPage')).toBeInTheDocument();
  });

  test('test "Forms" link', () => {
    render(createWithLoadContext(createWithRouter(<Navbar />, '/forms'), false));
    const formsLink = screen.getByTestId('formsLink');
    userEvent.click(formsLink);
    expect(screen.getByTestId('formsPage')).toBeInTheDocument();
  });

  test('test on entering wrong URL directly', () => {
    render(createWithLoadContext(createWithRouter(<Navbar />, '/some-not-existing-page'), false));
    expect(screen.getByTestId('notFoundPage')).toBeInTheDocument();
  });
});
