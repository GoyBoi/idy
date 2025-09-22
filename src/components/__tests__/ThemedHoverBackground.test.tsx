import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemedHoverBackground } from '../src/components/ThemedHoverBackground';

// Mock the useTheme hook
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
  }),
}));

describe('ThemedHoverBackground', () => {
  it('renders correctly', () => {
    render(
      <ThemedHoverBackground>
        <div>Test Content</div>
      </ThemedHoverBackground>
    );

    // Check if the component renders
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies className correctly', () => {
    render(
      <ThemedHoverBackground className="test-class">
        <div>Test Content</div>
      </ThemedHoverBackground>
    );

    // Check if the component renders with the provided className
    const container = screen.getByText('Test Content').closest('.test-class');
    expect(container).toBeInTheDocument();
  });
});