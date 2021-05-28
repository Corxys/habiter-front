import { render, screen } from '@testing-library/react';
import Habiter from './Habiter';

test('renders learn react link', () => {
  render(<Habiter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
