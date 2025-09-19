import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('should render the loading spinner with default size', () => {
    render(<LoadingSpinner />);
    
    const spinner = screen.getByLabelText('Loading');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('w-8', 'h-8'); // Default size is md
  });

  it('should render the loading spinner with small size', () => {
    render(<LoadingSpinner size="sm" />);
    
    const spinner = screen.getByLabelText('Loading');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('w-4', 'h-4');
  });

  it('should render the loading spinner with large size', () => {
    render(<LoadingSpinner size="lg" />);
    
    const spinner = screen.getByLabelText('Loading');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('w-12', 'h-12');
  });

  it('should render the loading spinner with additional className', () => {
    render(<LoadingSpinner className="my-custom-class" />);
    
    const wrapper = screen.getByRole('status').parentElement;
    expect(wrapper).toHaveClass('my-custom-class');
  });
});