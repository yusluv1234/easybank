import React from 'react';
import ArticlesData from '../articles-data/ArticlesData';
import Banking from '../banking/Banking';

import './Articles.scss';

const Articles = () => {
    return (
        <div className='articles'>
            <div className='article-header'>
                <div className='article_header'>Why choose Easybank?</div>
                <div className='article-text'>We leverage Open Banking to turn your bank account into your financial hub.
                    <br />Control your finance like naver before
                </div>
            </div>
            <div className='articles_data'>
                <ArticlesData  />
            </div>
            <div className='latest-articles'>
                <Banking />
            </div>
        </div>
    )
}

export default Articles;
