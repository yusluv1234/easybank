import React from 'react';
import Confetti from '../../assets/image-confetti.jpg';
import Currency from '../../assets/image-currency.jpg';
import Plane from '../../assets/image-plane.jpg';
import Restaurant from '../../assets/image-restaurant.jpg';

import './Banking.scss';

let Latestdata = [
    {
        imageUrl: <img src={Currency} alt='online' width="360" height="200" />,
        name: 'By Claire Robinson',
        title: "Receive money in any currency without no fees",
        text: "The world is getting smaller and we're becoming more mobile. So while should you be forced to only receive money in a single ...",
        id: 1
    },
    {
        imageUrl: <img src={Restaurant} alt='online' width="360" height="200" />,
        name: 'By Wilson Hutton',
        title: 'Treat yourself without worring about money',
        text: 'Our simple budgeting features allow you to seperate out your spending and set realistic limits each month. That means you ...',
        id: 2
    },
    {
        imageUrl: <img src={Plane} alt='online' width="360" height="200" />,
        name: 'By Wilson Hutton',
        title: 'Take your Easybank card everywhere you go',
        text: "We want you enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
        id: 3
    },
    {
        imageUrl: <img src={Confetti} alt='online' width="360" height="200" />,
        name: 'By Claire Robinson',
        title: 'Our invite-only Beta account are nowlive!',
        text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. Its easy to request an invite throgh the site ...",
        id: 4
    },
]

const BankingComment = ({data:{id, name, imageUrl, title, text}}) => {
    return(
        <div className='banking-comments'>
            <div className='imageUrl_bank' style={{fontSize: '12px'}}>{imageUrl}</div>
            <div className='banking-name'>{name}</div>
            <div className='banking-title'>{title}</div>
            <div className='banking-comment'>{text}</div>
        </div>
    )
}

const Banking = () => {
    return (
        <div className='bankink__header'>
        <div className='banking-top'>
            Latests Articles
        </div>
        <div className='banking'>
            {Latestdata && Latestdata.map((item, index) => (
                <BankingComment key={index} data={item} />
            ))};
        </div>
        </div>
    )
}

export default Banking

