import React from 'react'
import Mockups from '../../assets/image-mockups.png';

import './body.scss';

const Body = () => {
    return (
        <div className='body'>
            <div className='next-generation'>
                <div className='next-header'>
                Next generation digital banking
                </div>
                <div className='next-comment'>
                    Take your financial life online. Your Easybank account
                    <br />will be a one-stop-shop for spending, saving,
                    <br />budgeting, investing, and much more
                </div>
                <button className='next-button'></button>
            </div>
            <div className='image-body'>
                <img src={Mockups} alt='mochups' />
            </div>
        </div>
    )
}

export default Body
