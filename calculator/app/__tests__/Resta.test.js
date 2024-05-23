import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../Components/Calculator';


test('calculates 9 minus 4 and returns 5', () => {
    render(<Calculator />);
  
    // Simulate clicking buttons 9, -, 4, and =
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
  
    // Check if the result is 5
    expect(screen.getByText('5')).toBeInTheDocument();
  });