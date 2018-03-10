import React from 'react';
import {Row, Col} from 'antd';
import logo from '../../../static/images/logo.png';
import Nav from "./nav";
import LoginRegisterModal from './loginRegisterModal';
import './pc_header.css';

export default class PCHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLogined: false,//表示是否登陆
            userName: '', //表示用户名
            userId: '',   //表示用户id
            current: 'top',//表示当前点击的导航
            modalVisable: false, //表示登录注册的模态框是否显示
        };
    }


    //组件加载之前，判断其localstorage是否有值,如果有值，设置state中的用户名和用户id
    //设置登陆状态为true
    //此时显示用户名和退出按钮，即Logout组件
    componentWillMount() {
        //表示存在id
        if (localStorage.userId && localStorage.userId != '') {
            this.setState({userId: localStorage.userId, userName: localStorage.userName, hasLogined: true});
        }
    };

    MenuItemClick(e) {
        //注册登录MenuItem点击后，设置current值，显示注册登录的模态框
        if (e.key === 'register') {
            //高亮显示当前点击的MenuItem
            this.setState({current: 'register'});
            //显示模态框
            this.setModalVisible(true);
        } else {
            this.setState({current: e.key});
        }
    }

    //设置注册和登录模态框是否显示，默认不显示
    setModalVisible(value) {
        this.setState({modalVisable: value});
    }


    //点击登录表单中的登录按钮,直接设置为登录状态
    login(userLogin) {
        this.setState({userName: userLogin.userName, hasLogined: true, userId: userLogin.userId});
        localStorage.userName = userLogin.userName;
        localStorage.userId = userLogin.userId;
    }

    //点击MenuItem中退出登录按钮
    logout() {
        localStorage.userName = '';
        localStorage.userId = '';
        this.setState({hasLogined: false, userName: '', userId: ''});
    };






    render() {

        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a className='logo' href='/'>
                            <img src={logo} alt='logo'/>
                            <span>新闻头条</span>
                        </a>
                    </Col>
                    <Col span={18}>
                       <Nav hasLogined={this.state.hasLogined} logout={this.logout.bind(this)}
                            userName={this.state.userName} current={this.state.current}
                            menuItemClick={this.MenuItemClick.bind(this)}/>

                       <LoginRegisterModal setModalVisible={this.setModalVisible.bind(this)} login={this.login.bind(this)}
                                           visible={this.state.modalVisable}/>
                    </Col>
                </Row>
            </header>
        );
    }


}






