import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Detail from '../index';
import { useFetch } from '../../../../hooks/useFetch';

jest.mock('../../../../hooks/useFetch');
jest.mock('../../../loading', () => () => <div data-testid="loading">Loading...</div>);
jest.mock('../../../error', () => ({ message, status }) => <div data-testid="error">{`Error: ${message} ${status}`}</div>);
jest.mock('../../../path', () => ({ categories }) => <div data-testid="path">{categories.join(' > ')}</div>);

describe('Detail', () => {
    const mockItem = {
        detail: {
            title: 'FOO',
            condition: 'new',
            description: 'test',
            picture: 'test.jpg',
            price: { amount: 10000, currency: 'ARS' },
        },
        categories: ['category1', 'category2'],
    };

    const renderComponent = () => {
        render(
            <BrowserRouter >
                <Detail />
            </BrowserRouter>
        );
    };

    test('renders loading state', () => {
        useFetch.mockReturnValue([{}, true, null]);
        renderComponent();
        expect(screen.getByTestId('loading')).toBeInTheDocument();
    });

    test('renders error state', () => {
        useFetch.mockReturnValue([{}, false, { message: 'Error message', status: 500 }]);
        renderComponent();
        expect(screen.getByTestId('error')).toHaveTextContent('Error: Error message 500');
    });

    test('renders product not found error', () => {
        useFetch.mockReturnValue([{}, false, null]);
        renderComponent();
        expect(screen.getByTestId('error')).toHaveTextContent('Error: Producto no encontrado 404');
    });


    test('renders used condition correctly', () => {
        const usedItem = {
            ...mockItem,
            detail: { ...mockItem.detail, condition: 'used' },
        };
        useFetch.mockReturnValue([usedItem, false, null]);
        renderComponent();

        expect(screen.getByText('Usado')).toBeInTheDocument();
    });
});