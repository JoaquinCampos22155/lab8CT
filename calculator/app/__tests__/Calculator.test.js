import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../Components/Calculator';

test('calculates 9 + 9 and returns 18', () => {
  render(<Calculator />);

  // Simulate clicking buttons 9, +, 9, and =
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('='));

  // Check if the result is 18
  expect(screen.getByText('18')).toBeInTheDocument();
});
