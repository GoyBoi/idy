import React from 'react';
import { render, screen } from '@testing-library/react';
import DigitalHero from '@/components/DigitalHero';

// Mock useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('DigitalHero', () => {
  test('renders without crashing', () => {
    render(<DigitalHero />);
    
    // Check that the main title is rendered
    expect(screen.getByText('Celebrate')).toBeInTheDocument();
    expect(screen.getByText('African')).toBeInTheDocument();
    expect(screen.getByText('Heritage')).toBeInTheDocument();
    
    // Check that the subtitle is rendered
    expect(screen.getByText(/Discover authentic traditional clothing and handcrafted knitwear that tells the story of our rich cultural legacy/i)).toBeInTheDocument();
    
    // Check that the buttons are rendered
    expect(screen.getByText('Explore Collection')).toBeInTheDocument();
    expect(screen.getByText('View Collections')).toBeInTheDocument();
  });

  test('renders with custom className', () => {
    const { container } = render(<DigitalHero className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  test('has proper aria labels for buttons', () => {
    render(<DigitalHero />);
    
    const exploreButton = screen.getByText('Explore Collection');
    const viewButton = screen.getByText('View Collections');
    
    expect(exploreButton).toBeInTheDocument();
    expect(viewButton).toBeInTheDocument();
  });
});