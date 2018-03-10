import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
//如果已经登录，则头部显示用户名和退出按钮
export default class Logout extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <a href='#' target='_blank'><Button type='primary'>{this.props.userName}</Button></a>
                &nbsp;&nbsp;
                <Button type='ghost' onClick={this.props.logout}>注销用户</Button>
            </div>
        );
    }

}

//设置必须需要userName属性
Logout.propTypes = {
    userName: PropTypes.string.isRequired
};