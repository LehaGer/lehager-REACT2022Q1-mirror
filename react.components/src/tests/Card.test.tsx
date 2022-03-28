import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import Card from '../components/UI/CardSet/Card/Card';

const fakeLocalStorage = (function () {
  let store: { [key: string]: string } = {};

  return {
    getItem: function (key: string | number) {
      return store[key] || null;
    },
    setItem: function (key: string | number, value: string | number) {
      store[key] = value.toString();
    },
    removeItem: function (key: string | number) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

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

  test('is Card reacts on hover', () => {
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

  test('is Cards FavouriteBtn changes color on click', () => {
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

  test('is Cards FavouriteBtn saving state on unmounting', () => {
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

  test('is Cards FavouriteBtn set state on mounting', () => {
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
