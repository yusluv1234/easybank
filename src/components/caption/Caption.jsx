import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import BankView from '../../assets/image-mockups.png';

import './Caption.scss';

const Caption = () => {
    return (
        <div className='caption'>
            <div className='caption-about'>
                <span className='caption-about-header'>
                    Next generation
                    <br /> digital banking
                </span>
                <div className='caption-about-text'>
                    Take your financial life online. Your Easybank account
                    <br /> will be a one stop shop for spending savings
                    <br /> budgeting, investing, and much more.
                </div>
                <div className='caption-button'>
                <CustomButton type='submit'>Request Invite</CustomButton>
                </div>
            </div>
            <div className='caption-image'>
                <img src={BankView}  alt='bankview' />
         </div>
        </div>
    )
}

export default Caption;
