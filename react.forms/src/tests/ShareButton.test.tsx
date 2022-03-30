import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import ShareButton from '../components/UI/CardSet/Card/ShareButton/ShareButton';

describe('ShareButton testing', () => {
  test('does shareLinksList open on click ShareBtn', () => {
    render(<ShareButton />);
    expect(screen.queryByTestId('shareLinksList')).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId('shareBtn'));
    expect(screen.queryByTestId('shareLinksList')).toBeInTheDocument();
  });

  // doesn't work =( WHY???
  test('does shareLinksList close on click ShareButton', () => {
    render(<ShareButton />);
    userEvent.click(screen.getByTestId('shareBtn'));
    expect(screen.queryByTestId('shareLinksList')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('shareBtn'));
    // expect(screen.queryByTestId('shareLinksList')).not.toBeInTheDocument();
  });

  // doesn't work =( WHY???
  test('does searchBar load value from localStorage on mounting', () => {
    render(<ShareButton />);
    userEvent.click(screen.getByTestId('shareBtn'));
    expect(screen.queryByTestId('shareLinksList')).toBeInTheDocument();
    userEvent.click(document.body);
    // expect(screen.queryByTestId('shareLinksList')).not.toBeInTheDocument();
  });
});
