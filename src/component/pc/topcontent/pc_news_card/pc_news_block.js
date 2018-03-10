import React from 'react';
import PCNewsComponent from './pc_news_Component';

export default class PCNewsBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {news: ''};
    }

    //页面渲染后触发
    componentDidMount() {
        let fetchOption = {method: 'GET'};
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, fetchOption).then(response => response.json()).then(json => this.setState({news: json}));
    }


    render() {
        const news = this.state.news;
        //看news的长度是否为0，字符串长度为0则是false表示未加载到数据，为其他值则true加载到数据
        const newsCard = news.length ?
            <PCNewsComponent news={news}/>
            : '正在加载';

        return (
            <div>
                {newsCard}
            </div>

        );
    }
}