import React from 'react'

import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../index'

describe('Navbar', ()=> {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        );
    });



    test('should link to home the meli logo', ()=> {
        const logo = screen.getByRole('link', { name: /logo_meli/i });
        expect(logo).toHaveAttribute('href', '/');
    })

})