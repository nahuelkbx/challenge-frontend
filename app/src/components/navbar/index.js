import React from 'react'
import './styles.scss'

import logo from '../../specs/Logo_ML.png'
import Searchbar from '../searchbar/index';


function Navbar() {
    return (
        <header className='nav-container'>
            <div>
                <img src={logo} alt='logo_meli'/>
            </div>

            <Searchbar />
        </header>
    )
}

export default Navbar