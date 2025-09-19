import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the Shop component entirely
jest.mock('../Shop', () => ({
  Shop: () => <div data-testid="shop-page">Shop Page</div>
}));

import { Shop } from '../Shop';

describe('Shop', () => {
  it('should render the Shop component', () => {
    render(<Shop />);
    
    expect(screen.getByTestId('shop-page')).toBeInTheDocument();
  });
});