import React from 'react';
import { Row, Col,Card} from 'antd';
import FormComment from './FormComment';
import { message} from 'antd';


 export default class Comment extends React.Component {
    constructor() {
        super();
        this.state = {comments: ''};
    }

    componentDidMount() {
        let myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({comments: json});
        })
    };


    handleSubmit(data) {

        let myFetchOptions = {
            method: 'GET'
        };
        //如果用户登录了
        if(localStorage.userid!=null){
            //提交了之后发送请求添加评论
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" +data , myFetchOptions)
                .then(response => response.json())
                .then(json => {
                    //请求成功之后，重新加载页面
                    this.componentDidMount();
                })
        }
        else
        {
            message.info('请先登录哦亲~');
            return;
        }

    }

    render() {
        const comments = this.state.comments;
        const commnetList = comments.length?
            comments.map((comment,index)=>(
                <Card key={index} title={comment.UserName} extra={<a href="#">发布于 {comment.datetime}</a>}>
                    <p>{comment.Commnets}</p>
                </Card>
            )):'正在加载';


        return (
            <Row>
                <Col span={24}>
                    {commnetList}
                     <FormComment submitFn={this.handleSubmit.bind(this)}/>
                </Col>
            </Row>
        );
    }

}

