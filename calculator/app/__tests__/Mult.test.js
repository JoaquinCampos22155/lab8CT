import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../Components/Calculator';


test('calculates 2 multiplied by 4 and returns 8', () => {
    render(<Calculator />);
  
    // Simulate clicking buttons 2, *, 4, and =
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
  
    // Check if the result is 8
    expect(screen.getByText('8')).toBeInTheDocument();
  });
  