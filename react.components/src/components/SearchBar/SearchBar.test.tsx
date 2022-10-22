import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event/dist';
import fakeLocalStorage from '../../tests/functions/fackeLocalStorage';

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

  test('does searchBar save value to localStorage on unmounting', () => {
    const SearchBarName = 'search-bar';
    const { unmount } = render(<SearchBar name={SearchBarName} />);
    userEvent.type(screen.getByTestId('searchBar'), 'some testing string');
    unmount();
    expect(window.localStorage.getItem(SearchBarName)).toEqual('some testing string');
  });

  test('does searchBar load value from localStorage on mounting', async () => {
    const SearchBarName = 'search-bar';
    render(<SearchBar name={SearchBarName} />);
    await window.localStorage.setItem(SearchBarName, 'some testing string');
    expect(window.localStorage.getItem(SearchBarName)).toEqual('some testing string');
  });
});
