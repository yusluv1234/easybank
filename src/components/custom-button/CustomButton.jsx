import React from 'react';

import './CustomButton.scss';

function CustomButton(props) {
    return (
        <div className='custom-button'>
            <a className='href-button' href='/'>
            <div className='button-title'>{props.title}</div>
            </a>
        </div>
    )
}

export default CustomButton;
