import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText("Welcome to React First Test App");
  expect(text).toBeInTheDocument();
});
