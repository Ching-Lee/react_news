import React from 'react';
import {Row, Col} from 'antd';
import MobileHeader from '../../component/mobile/header/mobile_header';
import MobileFooter from '../../component/mobile/footer/mobile_footer';
import Comment from '../../component/common/common_comment';

export default class MobileNewsDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
    }

    componentDidMount() {
        let fetchOption = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, fetchOption)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json});
                document.title = this.state.newsItem.title + "-新闻头条";
            });
    }

    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    }

    render() {
        return (

            <div>
                <MobileHeader/>
                <Row style={{marginTop:'1em'}}>
                    <Col span={1}/>
                    <Col span={22}>
                        <div dangerouslySetInnerHTML={this.createMarkup()}/>
                        <Comment uniquekey={this.props.params.uniquekey}/>
                    </Col>
                    <Col span={1}/>
                </Row>
                <MobileFooter/>
            </div>

        );
    }
}