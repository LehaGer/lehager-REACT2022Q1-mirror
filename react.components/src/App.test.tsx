import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// problem with BrowserRouter location (it should be inside App for passing the test)

test('renders App', () => {
  render(<App />);
});
