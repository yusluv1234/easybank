import React from 'react';
import Confetti from '../../assets/image-confetti.jpg';
import Currency from '../../assets/image-currency.jpg';
import Plane from '../../assets/image-plane.jpg';
import Restaurant from '../../assets/image-restaurant.jpg';

import './banking.scss';

let Latestdata = [
    {
        imageUrl: <img src={Currency} alt='online' />,
        name: 'By Claire Robinson',
        title: "Receive money in any currency without no fees",
        text: "The world is getting smaller and we're becoming more mobile. So while should you be forced to only receive money in a single ...",
        id: 1
    },
    {
        imageUrl: <img src={Restaurant} alt='online' />,
        name: 'By Wilson Hutton',
        title: 'Treat yourself without worring about money',
        text: 'Our simple budgeting features allow you to seperate out your spending and set realistic limits each month. That means you ...',
        id: 2
    },
    {
        imageUrl: <img src={Plane} alt='online' />,
        name: 'By Wilson Hutton',
        title: 'take your Easybank card everywhere you go',
        text: "We want you enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
        id: 3
    },
    {
        imageUrl: <img src={} alt='online' />,
        name: 'By Claire Robinson',
        title: '',
        text: '',
        id: 4
    },
]

const Banking = () => {
    return (
        <div>
            
        </div>
    )
}

export default Banking

