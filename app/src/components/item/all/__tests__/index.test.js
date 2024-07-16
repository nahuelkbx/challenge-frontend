import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Cards from '../';

jest.mock('../../card', () => ({ id, title }) => (
  <div data-testid={`mock-card-${id}`}>{title}</div>
));

describe('Cards', () => {
  const mockItems = [
    { id: 'MLA123', title: 'foo', price: 100, picture: 'test1.jpg', condition: 'new', free_shipping: true },
    { id: 'MLA456', title: 'bar', price: 200, picture: 'test2.jpg', condition: 'used', free_shipping: false },
    { id: 'MLA777', title: 'test', price: 300, picture: 'test3.jpg', condition: 'new', free_shipping: true },
  ];

  beforeEach(() => {
    render(
        <BrowserRouter>
            <Cards items={mockItems} />
        </BrowserRouter>
    );
});


  test('should render the correct number of childrens', () => {
    const cards = screen.getAllByTestId(/mock-card-/);
    expect(cards).toHaveLength(3);
  });
});