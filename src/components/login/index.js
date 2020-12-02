import React, { useState } from 'react';
import { Row, Col, Input, Button, Form, Checkbox, Typography } from "antd";

import LoginFormStyle from "./style";

const LoginForm = () => {

    const { Text } = Typography;
    const [rememberMe, setRememberMe] = useState(true);

    return (
        <Row >
            <Col style={LoginFormStyle.root} span={12} offset={6} >
                <Text style={LoginFormStyle.title}>Đăng ký</Text>
                <Button style={{...LoginFormStyle.quickLoginBtn, ...LoginFormStyle.phoneLoginBtn }}>SỐ ĐIỆN THOẠI</Button>
                <Button style={{...LoginFormStyle.quickLoginBtn, ...LoginFormStyle.facebookLoginBtn}}>Facebook</Button>
                <Button style={{...LoginFormStyle.quickLoginBtn, ...LoginFormStyle.googleLoginBtn}}>Google</Button>
                <Text>Hoặc đăng nhập bằng tài khoản của bạn</Text>
                <Form>
                    <Form.Item name="username">
                        <Input prefix="" placeholder="Username/Email" />
                    </Form.Item>
                    <Form.Item name="password">
                        <Input.Password prefix="" placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox checked={rememberMe} onClick={() => setRememberMe(!rememberMe)}>Lưu thông tin đăng nhập</Checkbox>
                        <a href='/forgot-password'>Quên mật khẩu?</a>
                    </Form.Item>
                    <Form.Item>
                        <Button style={LoginFormStyle.loginBtn} htmlType="submit">
                            ĐĂNG NHẬP
                        </Button>
                    </Form.Item>
                </Form>
                <Text>
                    Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với <a href='/policy'>Chính sách quy định của ...</a>
                </Text>
            </Col>
        </Row>
    )
}

export default LoginForm;