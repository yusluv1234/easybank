import React from 'react';
import Online from '../Icon/icon-online.svg';
import Budgeting from '../Icon/icon-budgeting.svg';
import Onboarding from '../Icon/icon-onboarding.svg';
import Api from '../Icon/icon-api.svg';

import './ArticlesData.scss';

let Bankdata = [
    {
        imageUrl: <img src={Online} alt='online' />,
        title: 'Online Banking',
        text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world',
        id: 1
    },
    {
        imageUrl: <img src={Budgeting} alt='online' />,
        title: 'Simple Budgeting',
        text: 'See where exactly your money goes each month. Receive notification when you are close to hitting your limit',
        id: 2
    },
    {
        imageUrl: <img src={Onboarding} alt='online' />,
        title: 'Fast Onboarding',
        text: "We don't do branches, Open your account in minute online and start taking control on your financies right away",
        id: 3
    },
    {
        imageUrl: <img src={Api} alt='online' />,
        title: 'Open Api',
        text: 'Manage your savings, investment, pension, and much more from one account. Tracking your money as never been easier',
        id: 4
    },
]

const ArticlesComment = ({data:{id, imageUrl, title, text}}) => {
    return(
        <div className='articles-comment'>
            <div className='imageUrl'>{imageUrl}</div>
            <div className='article-title'>{title}</div>
            <div className='article-comment'>{text}</div>
        </div>
    )
}

const ArticlesData = () => {
    // const [state, setState] = useState({

    // });

    return (
        <div className='articles-data'>
            {Bankdata && Bankdata.map((item, index) => (
                <ArticlesComment key={index} data={item} />
            ))}
        </div>
    )
}

export default ArticlesData;
