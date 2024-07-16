import React from 'react'

import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Searchbar from '../index'

const mockedUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Searchbar', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Searchbar />
            </BrowserRouter>
        );
    });



    test('updates input value on change', () => {
        const inputElement = screen.getByPlaceholderText('Nunca dejes de buscar');
        fireEvent.change(inputElement, { target: { value: 'test query' } });
        expect(inputElement.value).toBe('test query');
    });

    test('navigates on enter key press', () => {
        const inputElement = screen.getByPlaceholderText('Nunca dejes de buscar');

        fireEvent.change(inputElement, { target: { value: 'test query' } });
        fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

        expect(mockedUsedNavigate).toHaveBeenCalledWith('/items?search=test query');
    });

    test('navigates on search button click', () => {
        const inputElement = screen.getByPlaceholderText('Nunca dejes de buscar');
        const buttonElement = screen.getByRole('img', { name: 'searchLogo' });
    
        fireEvent.change(inputElement, { target: { value: 'test query' } });
        fireEvent.click(buttonElement);
    
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/items?search=test query');
      });

      afterEach(()=> {
        cleanup()
    })
})
