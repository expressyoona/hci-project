import React, { useState } from 'react';
import { Row, Col, Input, Button, Form, Checkbox, Typography, Space } from "antd";
import { useDispatch } from "react-redux";

import { signInWithGoogle, signInWithFacebook } from "config/firebase-db";
import LoginFormStyle from "./style";

const LoginForm = () => {

    const { Text } = Typography;
    const [rememberMe, setRememberMe] = useState(true);
    const dispath = useDispatch();

    const loginSuccess = (user) => {
        // console.log(user);
        dispath({ type: 'USER_LOGGED_IN', payload: user})
    }

    const loginFailed = (error) => {
        console.log('Error when logged in: ', error);
    }

    return (
        <Row >
            <Col style={LoginFormStyle.root} span={8} offset={8} >
                <Text style={LoginFormStyle.title}>Đăng ký</Text>
                <Space direction="vertical" style={{border: '20px'}}>
                    <Button style={{...LoginFormStyle.quickLoginBtn, ...LoginFormStyle.phoneLoginBtn }}>SỐ ĐIỆN THOẠI</Button>
                    <Button onClick={() => signInWithFacebook(loginSuccess, loginFailed)} style={{...LoginFormStyle.quickLoginBtn, ...LoginFormStyle.facebookLoginBtn}}>Facebook</Button>
                    <Button onClick={() => signInWithGoogle(loginSuccess, loginFailed)} style={{...LoginFormStyle.quickLoginBtn, ...LoginFormStyle.googleLoginBtn}}>Google</Button>
                </Space>
                <Text style={{margin: '20px 0'}}>Hoặc đăng nhập bằng tài khoản của bạn</Text>
                <Form>
                    <Form.Item name="username">
                        <Input prefix="" placeholder="Username/Email" />
                    </Form.Item>
                    <Form.Item name="password">
                        <Input.Password prefix="" placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox checked={rememberMe} onClick={() => setRememberMe(!rememberMe)}>Lưu thông tin đăng nhập</Checkbox>
                        <a href='/forgot-password' style={LoginFormStyle.forget}>Quên mật khẩu?</a>
                    </Form.Item>
                    <Form.Item>
                        <Button style={LoginFormStyle.loginBtn} htmlType="submit">
                            ĐĂNG NHẬP
                        </Button>
                    </Form.Item>
                </Form>
                <Text style={LoginFormStyle.policy}>
                    Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với <a href='/policy'>Chính sách quy định của ...</a>
                </Text>
            </Col>
        </Row>
    )
}

export default LoginForm;