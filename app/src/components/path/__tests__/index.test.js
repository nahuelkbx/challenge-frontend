import React from 'react'

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Path from '../index'

const categories = [
    {path: 'Foo'},
    {path: 'bar'}
]

describe('Path', ()=> {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Path categories={categories}/>
            </BrowserRouter>
        );
    });

    test('should render the correct number of childrens', ()=> {
        const elements = screen.getAllByText(/Foo|bar/i)

        expect(elements).toHaveLength(2)
    })


})