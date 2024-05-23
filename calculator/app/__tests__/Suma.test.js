import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../Components/Calculator';

test('calculates 2.5 plus 7.5 and returns 10', () => {
    render(<Calculator />);
  
    // Simulate clicking buttons 2, ., 5, +, 7, ., 5, and =
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
  
    // Check if the result is 10
    expect(screen.getByText('10')).toBeInTheDocument();
  });
  