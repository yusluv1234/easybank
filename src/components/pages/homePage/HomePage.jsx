import React from 'react';
import Caption from '../../caption/Caption';
import Navbar from '../../navbar/Navbar';
import Articles from '../../articles/Articles';
import Footer from '../../footer/Footer';

import './HomePage.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='homepage-navbar'>
                <Navbar />
            </div>
            <div className='homepage-caption'>
                <Caption />
                <Articles />
            </div>
            <div className='homepage-footer'>
                <Footer />
            </div>
            
        </div>
    )
}

export default HomePage;
