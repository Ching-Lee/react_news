import React from 'react';
import Logout from './LogoutComponent';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router';
export default class Nav extends React.Component{
    render(){
        //判断用户是否登录，用户登录就显示个人中心和退出按钮
        //用户没有登录就显示注册/登录按钮
        const userShow = this.props.hasLogined ?
            <Menu.Item key="logout">
                <Logout logout={this.props.logout} userName={this.props.userName}/>
            </Menu.Item> :
            <Menu.Item key='register'>
                <Icon type='appstore'/>注册/登录
            </Menu.Item>;

        return(
            <Menu mode="horizontal" selectedKeys={[this.props.current]}
                  onClick={this.props.menuItemClick}>
                <Menu.Item key="top">
                    <Link to='/top'>
                        <Icon type="appstore"/>头条
                    </Link>
                </Menu.Item>

                <Menu.Item key="shehui">
                    <Link to='/shehui'>
                        <Icon type="appstore"/>社会
                    </Link>
                </Menu.Item>

                <Menu.Item key="guonei">
                    <Link to='/guonei'>
                        <Icon type="appstore"/>国内
                    </Link>
                </Menu.Item>

                <Menu.Item key="guoji">
                    <Link to='/guoji'>
                        <Icon type="appstore"/>国际
                    </Link>
                </Menu.Item>

                <Menu.Item key="yule">
                    <Link to='/yule'>
                        <Icon type="appstore"/>娱乐
                    </Link>
                </Menu.Item>

                <Menu.Item key="tiyu">
                    <Link to='/tiyu'>
                        <Icon type="appstore"/>体育
                    </Link>
                </Menu.Item>

                <Menu.Item key="keji">
                    <Link to='/keji'>
                        <Icon type="appstore"/>科技
                    </Link>
                </Menu.Item>

                <Menu.Item key="shishang">
                    <Link to='/shishang'>
                        <Icon type="appstore"/>时尚
                    </Link>
                </Menu.Item>
                {userShow}
            </Menu>

        );
    }
}