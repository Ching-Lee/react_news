import React from 'react'
import {Form, Button, Input} from 'antd';
 class FormComment extends React.Component {
     handleSubmit(e){
         e.preventDefault();
         let data=this.props.form.getFieldValue('remark');
         this.props.submitFn(data);
     }
    render(){
        let {getFieldDecorator} = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Item label='您的评论'>
                    {getFieldDecorator('remark', {
                        rules: [{
                            required: true,
                            message: '评论不能为空'
                        }],
                    })(
                        <Input type='textarea' placeholder="小主快来评论吧~" />
                    )}
                </Form.Item>
                <Button type='primary' htmlType='submit'>提交评论</Button>
            </Form>
        )
    }
}



export default FormComment = Form.create({})(FormComment);