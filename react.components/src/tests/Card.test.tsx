import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import Card from '../components/UI/CardSet/Card/Card';
import fakeLocalStorage from './helpers/fackeLocalStorage';

describe('Card testing', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
    window.localStorage.clear();
  });

  afterAll(() => {
    window.localStorage.clear();
  });

  test('does Card react on hover', () => {
    render(
      <Card
        id={1}
        image={'/'}
        location={'some-location'}
        name={'some-name'}
        origin={'some-origin'}
        status={'some-status'}
      />
    );
    expect(screen.getByTestId('Card')).toHaveClass('MuiPaper-elevation1');
    userEvent.hover(screen.getByTestId('Card'));
    expect(screen.getByTestId('Card')).toHaveClass('MuiPaper-elevation10');
    userEvent.unhover(screen.getByTestId('Card'));
    expect(screen.getByTestId('Card')).toHaveClass('MuiPaper-elevation1');
  });

  test('does Cards FavouriteBtn change color on click', () => {
    render(
      <Card
        id={1}
        image={'/'}
        location={'some-location'}
        name={'some-name'}
        origin={'some-origin'}
        status={'some-status'}
      />
    );
    expect(screen.getByTestId('favouriteIcon')).not.toHaveStyle({ color: '#f44336' });
    userEvent.click(screen.getByTestId('favouriteButton'));
    expect(screen.getByTestId('favouriteIcon')).toHaveStyle({ color: '#f44336' });
    userEvent.click(screen.getByTestId('favouriteButton'));
    expect(screen.getByTestId('favouriteIcon')).not.toHaveStyle({ color: '#f44336' });
  });

  test('does Cards FavouriteBtn save state on unmounting', () => {
    const { unmount } = render(
      <Card
        id={1}
        image={'/'}
        location={'some-location'}
        name={'some-name'}
        origin={'some-origin'}
        status={'some-status'}
      />
    );
    userEvent.click(screen.getByTestId('favouriteButton'));
    expect(window.localStorage.getItem('1')).toBeNull();
    unmount();
    expect(window.localStorage.getItem('1')).toEqual('true');
  });

  test('does Cards FavouriteBtn set state on mounting', () => {
    window.localStorage.setItem('1', 'true');
    render(
      <Card
        id={1}
        image={'/'}
        location={'some-location'}
        name={'some-name'}
        origin={'some-origin'}
        status={'some-status'}
      />
    );
    expect(screen.getByTestId('favouriteIcon')).toHaveStyle({ color: '#f44336' });
  });
});
