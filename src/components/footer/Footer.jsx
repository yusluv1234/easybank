import React from 'react';
import FooterLogo from '../Icon/logo.svg';
import FacebookIcon from '../Icon/icon-facebook.svg';
import InstagramLogo from '../Icon/icon-instagram.svg';
import PinterestLogo from '../Icon/icon-pinterest.svg';
import TwitterLogo from '../Icon/icon-twitter.svg';
import YoutubeLogo from '../Icon/icon-youtube.svg';

import './Footer.scss';
import CustomButton from '../custom-button/CustomButton';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='Icons-header'>
                <div className=' icons-topbar'>
                <a href='/homepage'>
                    <img src={FooterLogo} alt='icons' />
                </a>
                </div>
                <div className='icons-bottom'>
                    <a href='/www.facebook.com'>
                    <img src={FacebookIcon} alt='icons' />
                </a> <br />
                <a href='/www.twitter.com'>
                <img src={TwitterLogo} alt='icons' />
                </a><br />
                <a href='/www.instagram.com'>
                <img src={InstagramLogo} alt='icons' />
                </a><br />
                <a href='/www.youtube.com'>
                <img src={YoutubeLogo} alt='icons' />
                </a><br />
                <a href='/www.pinterest.com'>
                <img src={PinterestLogo} alt='icons' />
                </a>
                </div>
            </div>
            <div className='footer-about'>
                <div className='footer-about-tag1'>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                    <a href='/blog'>Blogs</a>
                </div>
                <div className='footer-about-tag1'>
                    <a href='/career'>Careers</a>
                    <a href='/support'>Support</a>
                    <a href='/privacy'>Privacy Policy</a>
                </div>
            </div>
            <div className='footer-copy '>
            <CustomButton type='submit'>Request Invite</CustomButton>
                <div className='copy-right' >&copy; Easybank All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer;
