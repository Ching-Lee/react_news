import React from 'react';
import ImageSingleComponent from './imageSingle_component'

 export default class PCNewsImageSingle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {news: ''};
    }

    //页面渲染之前
    componentDidMount() {
        let fetchOption = {method: 'GET'};
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, fetchOption).then(response => response.json()).then(json => this.setState({news: json}));
    }

    render(){
        const news=this.state.news;
        const newsList=news.length?
          <ImageSingleComponent news={news} ImageWidth={this.props.ImageWidth} width={this.props.width} title={this.props.title}/>
            :'正在加载';

        return(
            <div >
                {newsList}
            </div>
        );
    }
}