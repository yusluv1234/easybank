import React from 'react';
import Caption from '../../caption/Caption';
import Navbar from '../../navbar/Navbar';

import './HomePage.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='homepage-navbar'>
                <Navbar />
            </div>
            <div className='homepage-caption'>
                <Caption />
            </div>
            
        </div>
    )
}

export default HomePage;
