import React from 'react';
import FooterLogo from '../Icon/logo.svg';
import FacebookIcon from '../Icon/icon-facebook.svg';
import InstagramLogo from '../Icon/icon-instagram.svg';
import PinterestLogo from '../Icon/icon-pinterest.svg';
import TwitterLogo from '../Icon/icon-twitter.svg';
import YoutubeLogo from '../Icon/icon-youtube.svg';

import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='Icons-header'>
                <div className=' icons-topbar'>
                <a href='./homepage'>
                    <img src={FooterLogo} alt='icons' />
                </a>
                </div>
                <div className='icons-bottom'>
                    <a href='./www.facebook.com'>
                    <img src={FacebookIcon} alt='icons' />
                </a>
                <a href='./www.twitter.com'>
                <img src={TwitterLogo} alt='icons' />
                </a>
                <a href='./www.instagram.com'>
                <img src={InstagramLogo} alt='icons' />
                </a>
                <a href='./www.youtube.com'>
                <img src={YoutubeLogo} alt='icons' />
                </a>
                <a href='./www.pinterest.com'>
                <img src={PinterestLogo} alt='icons' />
                </a>
                </div>
            </div>
            <div className='footer-about1'>
                <div className='footer-about-tag'>
                    <a href='./about'>About</a>
                    <a href='./contact'>Contact</a>
                    <a href='./blog'>Blogs</a>
                </div>
                <div className='footer-about-tag2'>
                    <a href='./career'>Careers</a>
                    <a href='./support'>Support</a>
                    <a href='./privacy'>Privacy Policy</a>
                </div>
            </div>
            <div className='footer'>

            </div>
        </div>
    )
}

export default Footer;
