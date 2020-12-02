import React from 'react';import BankLogo from '../Icon/logo.svg';
import CustomButton from '../custom-button/CustomButton';

import './Navbar.scss'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='bank-logo'>
            <a className='href' href='/home'>
                <img src={BankLogo} alt='bank-logo' /></a>
            </div>
           <div className='nav-links'>
                <a className='href' href='/home'>Home</a>
                <a className='href' href='/about'>About</a>
                <a className='href' href='/contact'>Contact</a>
                <a className='href' href='/blog'>Blogs</a>
                <a className='href' href='/career'>Careeers</a>
           </div>
           <div className='nav-button'>
                <CustomButton title='Request Invite' />
           </div>
           <div className='navbar-login'>
           <a className='href' href='/signin'>SignIn</a>
                <a className='href' href='/signup'>SignUp</a>
           </div>
        </div>
    )
}

export default Navbar;
