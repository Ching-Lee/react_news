import React from 'react';
import {Icon,Form, Input, Button,Checkbox} from 'antd';
import './pc_header.css'
//登录表单组件
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasUser: ''};
    }

    //motal框中的处理登录提交表单
    handleLoginSubmit(e) {
        //页面开始向API进行提交数据
        //阻止submit事件的默认行为
        e.preventDefault();
        this.props.form.validateFields((err, formData) => {
            if (!err) {
                console.log('Received values of form: ', formData);
                let myFetchOptions = {method: 'GET'};
                fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=" + formData.userName + "&password=" + formData.password + "&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions)
                    .then(response => response.json())
                    .then(json => {
                        if (json !== null) {
                            console.log(json);
                            let userLogin = {userName: json.NickUserName, userId: json.UserId};
                            this.props.login(userLogin);
                            //设置模态框消失
                            this.props.setModalVisible(false);
                        }
                        else {
                            //如果json为null，表示用户名密码不存在
                            this.setState({hasUser: '用户名或密码错误'});
                        }

                    });


            }
        });
    }

    render() {
        let {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleLoginSubmit.bind(this)}>
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{
                            required: true,
                            message: 'Please input your username!'
                        }],
                    })(
                        <Input prefix={<Icon type="user"
                                             style={{color: 'rgba(0,0,0,.25)'}}/>}
                               placeholder="Username"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true,
                            message: 'Please input your Password!'
                        }],
                    })(
                        <Input prefix={<Icon type="lock"
                                             style={{color: 'rgba(0,0,0,.25)'}}/>}
                               type="password" placeholder="Password"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <span>{this.state.hasUser}</span>
                    <Button type="primary" htmlType="submit"
                            className="login-form-button">
                        Log in
                    </Button>

                </Form.Item>
            </Form>
        );
    }

}

const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm;