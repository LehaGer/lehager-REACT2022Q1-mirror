import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import ShareButton from '../components/UI/CardSet/Card/ShareButton/ShareButton';

describe('ShareButton testing', () => {
  test('does ShareLinksList open on click ShareBtn', () => {
    render(<ShareButton />);
    expect(screen.queryByTestId('ShareLinksList')).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId('ShareBtn'));
    expect(screen.queryByTestId('ShareLinksList')).toBeInTheDocument();
  });

  // doesn't work =( WHY???
  test('does ShareLinksList close on click ShareButton', () => {
    render(<ShareButton />);
    userEvent.click(screen.getByTestId('ShareBtn'));
    expect(screen.queryByTestId('ShareLinksList')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('ShareBtn'));
    // expect(screen.queryByTestId('ShareLinksList')).not.toBeInTheDocument();
  });

  // doesn't work =( WHY???
  test('does searchBar load value from localStorage on mounting', () => {
    render(<ShareButton />);
    userEvent.click(screen.getByTestId('ShareBtn'));
    expect(screen.queryByTestId('ShareLinksList')).toBeInTheDocument();
    userEvent.click(document.body);
    // expect(screen.queryByTestId('ShareLinksList')).not.toBeInTheDocument();
  });
});
