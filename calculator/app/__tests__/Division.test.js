import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../Components/Calculator';


test('calculates 22 divided by 7 and returns 3.142857142', () => {
    render(<Calculator />);
  
    // Simulate clicking buttons 2, 2, /, 7, and =
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
  
    // Check if the result is 3.142857142
    expect(screen.getByText('3.142857142')).toBeInTheDocument();
  });