import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from '../components/UI/SearchBar/SearchBar';
import userEvent from '@testing-library/user-event/dist';

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

describe('SearchBar testing', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
    window.localStorage.clear();
  });

  test('is searchBar editable', () => {
    const SearchBarName = 'search-bar';
    render(<SearchBar name={SearchBarName} />);
    expect(screen.getByTestId('searchBar')).toHaveValue('');
    userEvent.type(screen.getByTestId('searchBar'), 'some testing string');
    expect(screen.getByTestId('searchBar')).toHaveValue('some testing string');
  });

  test('is searchBar saves value to localStorage on unmounting', () => {
    const SearchBarName = 'search-bar';
    const { unmount } = render(<SearchBar name={SearchBarName} />);
    userEvent.type(screen.getByTestId('searchBar'), 'some testing string');
    unmount();
    expect(window.localStorage.getItem(SearchBarName)).toEqual('some testing string');
  });

  test('is searchBar loads value from localStorage on mounting', () => {
    const SearchBarName = 'search-bar';
    window.localStorage.setItem(SearchBarName, 'some testing string');
    render(<SearchBar name={SearchBarName} />);
    expect(window.localStorage.getItem(SearchBarName)).toEqual('some testing string');
  });
});
