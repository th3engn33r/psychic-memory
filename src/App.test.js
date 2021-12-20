import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tincidunt text', () => {
  render(<App />);
  const tabOneText = screen.getByText('Donec vitae');
  expect(tabOneText).toBeVisible();
});
