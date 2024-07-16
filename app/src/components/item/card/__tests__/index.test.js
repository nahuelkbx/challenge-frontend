import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../index';

describe('Card', () => {
  const mockProps = {
    id: 'MLA123',
    title: 'foo',
    price: { amount: 10000, currency: 'ARS' },
    picture: 'test.jpg',
    free_shipping: false,
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
      </BrowserRouter>
    );
  });

  test('should link to details', () => {
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/items/MLA123');
  });

  test('does not display free shipping icon when free_shipping is false', () => {
    const shippingIcon = screen.queryByAltText('shippingLogo');
    expect(shippingIcon).not.toBeInTheDocument();
  });
});
