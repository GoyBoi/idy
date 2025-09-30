import React from 'react';
import { render, screen } from '@testing-library/react';
import { Background } from '../components/Background';

// Mock canvas context for testing
HTMLCanvasElement.prototype.getContext = jest.fn().mockImplementation(() => {
  return {
    createLinearGradient: jest.fn().mockReturnValue({
      addColorStop: jest.fn(),
    }),
    clearRect: jest.fn(),
    fillRect: jest.fn(),
    beginPath: jest.fn(),
    arc: jest.fn(),
    fill: jest.fn(),
    closePath: jest.fn(),
  };
});

describe('Background Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<Background />);
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('creates canvas element with correct attributes', () => {
    render(<Background />);
    const canvas = screen.getByRole('presentation');
    expect(canvas).toHaveClass('fixed', 'inset-0', '-z-10', 'w-full', 'h-full');
  });

  it('implements requestAnimationFrame for smooth animations', () => {
    global.requestAnimationFrame = jest.fn().mockImplementation((cb) => {
      cb();
      return 1;
    });
    
    render(<Background />);
    expect(global.requestAnimationFrame).toHaveBeenCalled();
  });
});