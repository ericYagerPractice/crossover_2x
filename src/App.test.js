import { render, screen } from '@testing-library/react';
import App from './App';
import HomePage from './pages/HomePage';

test('Load Homepage', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
