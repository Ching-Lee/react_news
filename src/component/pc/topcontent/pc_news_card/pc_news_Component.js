import {Link} from 'react-router';
import {Card} from 'antd';
import React from 'react';
import './pc_news_component.css'
export default class NewsComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let news=this.props.news;
        let newsList=news.map((newsItem, index) => (
            <li key={index}>
                <Link to={`details/${newsItem.uniquekey}`} target='_blank'>
                    {newsItem.title}
                </Link>
            </li>
        ));

        return (
            <Card className='news_card'>
                <ul>
                    {newsList}
                </ul>
            </Card>

        );
    }
}