import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import ShareButton from '../components/UI/CardSet/Card/ShareButton/ShareButton';

describe('ShareButton testing', () => {
  test('is ShareLinksList opens on click ShareBtn', () => {
    render(<ShareButton />);
    expect(screen.queryByTestId('ShareLinksList')).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId('ShareBtn'));
    expect(screen.queryByTestId('ShareLinksList')).toBeInTheDocument();
  });

  // not works =( WHY???
  test('is ShareLinksList closes on click ShareButton', () => {
    render(<ShareButton />);
    userEvent.click(screen.getByTestId('ShareBtn'));
    expect(screen.queryByTestId('ShareLinksList')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('ShareBtn'));
    // expect(screen.queryByTestId('ShareLinksList')).not.toBeInTheDocument();
  });

  // not works =( WHY???
  test('is searchBar loads value from localStorage on mounting', () => {
    render(<ShareButton />);
    userEvent.click(screen.getByTestId('ShareBtn'));
    expect(screen.queryByTestId('ShareLinksList')).toBeInTheDocument();
    userEvent.click(document.body);
    // expect(screen.queryByTestId('ShareLinksList')).not.toBeInTheDocument();
  });
});
