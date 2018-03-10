import React from 'react';

import MobileNewsComponent from './mobile_news_component'
import LoadMore from './LoadMore'

export default class MobileNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            count: 10,
            isLoading:false,
            hasMore:true,
        };
    }


    componentDidMount() {
        let fetchOption = {method: 'GET'};
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.state.count, fetchOption)
            .then(response => response.json())
            .then(json => this.setState({news: json}));
    }

    //加载更多方法
    loadMoreFn(){

        this.setState({isLoading:true});
        let count=this.state.count+10;
        if (count>0&&count<300){
            this.setState({count:count});
            let fetchOption = {method: 'GET'};
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.state.count, fetchOption)
                .then(response => response.json())
                .then(json => this.setState({news: json}));
            this.setState({isLoadingMore: false});
        }else {
            this.setState({isLoading:false, hasMore:false})
        }
    }


    render() {
        const news = this.state.news;

        const newsList = news.length ?
           <MobileNewsComponent news={news} ImageWidth={this.props.ImageWidth}/>
            : '正在加载';

        return (
            <div className='mobile_news'>
                {newsList}
                {
                    this.state.hasMore?
                    <LoadMore isLoading={this.state.isLoading} loadMoreFn={this.loadMoreFn.bind(this)}/>
                    :<div style={{textAlign:'center',backgroundColor:'#F8F8F8'}}>木有更多咯</div>
                }

            </div>
        );
    }
}