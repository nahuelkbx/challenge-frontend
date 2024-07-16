import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../index';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../loading', () => () => <div data-testid="loading">Loading...</div>);
jest.mock('../../error', () => ({ message, status }) => <div data-testid="error">{`Error: ${message} ${status}`}</div>);
jest.mock('../../path', () => ({ categories }) => <div data-testid="path">{categories.join(' > ')}</div>);
jest.mock('../../item/all', () => ({ items }) => <div data-testid="cards">{items.length} items</div>);

describe('Home', () => {
  const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test', route);
    return render(ui, { wrapper: MemoryRouter });
  };

  test('renders loading state', () => {
    useFetch.mockReturnValue([{}, true, null]);
    renderWithRouter(<Home />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('renders error state', () => {
    useFetch.mockReturnValue([{}, false, { message: 'Error message', status: 500 }]);
    renderWithRouter(<Home />);
    expect(screen.getByTestId('error')).toHaveTextContent('Error: Error message 500');
  });

  test('renders no results found', () => {
    useFetch.mockReturnValue([{ items: [] }, false, null]);
    renderWithRouter(<Home />, { route: '/?search=nonexistent' });
    expect(screen.getByTestId('error')).toHaveTextContent('Error: No se encontraron resultados para 404');
  });

});