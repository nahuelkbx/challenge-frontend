import React from 'react'

import { Link } from 'react-router-dom'


import './styles.scss'

import logo from '../../specs/Logo_ML.png'
import Searchbar from '../searchbar/index';


function Navbar() {
    return (
        <header className='nav-container'>
            <div>
                <Link to={'/'}>
                <img src={logo} alt='logo_meli'/>
                </Link>
            </div>

            <Searchbar />
        </header>
    )
}

export default Navbar