import React from 'react'
import Mockups from '../../assets/image-mockups.png';

const Body = () => {
    return (
        <div className='body'>
            <div className='next-generation'>
                Next generation digital banking
            </div>
            <div className='image-body'>
                <img src={Mockups} alt='mochups' />
            </div>
        </div>
    )
}

export default Body
