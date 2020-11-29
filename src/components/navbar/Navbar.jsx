import React from 'react';
import Logo from '../../Icon/logo.svg';

import './navbar.scss';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
            <img src={Logo} alt="logo" />
            </div>        
            <div className='navbar-layout'>
                <span>Home</span>
                <span>About</span>
                <span>Contacts</span>
                <span>Blog</span>
                <span>Careers</span>
            </div>
            
        </div>
    )
}

export default Navbar;
