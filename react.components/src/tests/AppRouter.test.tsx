import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import { renderRouter } from './functions/renderRouter';

describe('Router testing', () => {
  test('is "Main" is an initial page', () => {
    renderRouter();
    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
  });

  test('test "Main" link', () => {
    renderRouter('/some-not-main-page');
    expect(screen.queryByTestId('mainPage')).not.toBeInTheDocument();
    const mainLink = screen.getByTestId('mainLink');
    userEvent.click(mainLink);
    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
  });

  test('test "About" link', () => {
    renderRouter('/some-not-about-page');
    const aboutLink = screen.getByTestId('aboutLink');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('aboutPage')).toBeInTheDocument();
  });

  test('test "NotFound" link', () => {
    renderRouter('/some-not-notfound-page');
    const notFoundLink = screen.getByTestId('notFoundLink');
    userEvent.click(notFoundLink);
    expect(screen.getByTestId('notFoundPage')).toBeInTheDocument();
  });

  test('test on entering wrong URL directly', () => {
    renderRouter('/some-not-existing-page');
    expect(screen.getByTestId('notFoundPage')).toBeInTheDocument();
  });
});
