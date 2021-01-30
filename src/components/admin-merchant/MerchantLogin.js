import React from "react";
import { Button, Image, Form, Input, Layout, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { signInWithGoogle } from "config/firebase-db";

const MerchantLogin = () => {

    const { Header, Content } = Layout;

    return (
        <Layout style={{height: '100%', backgroundImage: 'url(images/background.jpg)'}}> 
            <Header style={{backgroundColor: "white", textAlign: 'center', color: '#7FAD39', fontSize: 36}}>QUẢN LÝ CỬA HÀNG CỦA BẠN</Header>
            <Content style={{height: 'calc(100vh - 64px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 600, borderRadius: 10, padding: '18px 30px 25px'}}>
                    <h1>Đăng nhập</h1>
                    <Typography.Paragraph style={{textAlign: 'center'}}>Đăng nhập bằng tài khoản của bạn bằng số điện thoại, email hoặc tên tài khoản đã được chúng tôi xác nhận là cửa hàng đối tác.</Typography.Paragraph>
                    <Form
                        initialValues={{ remember: true}}
                    >
                        <Form.Item>
                            <Input prefix={<UserOutlined />} placeholder="Email hoặc Số điện thoại" />
                        </Form.Item>
                        <Form.Item>
                            <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
                        </Form.Item>
                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox checked>Lưu thông tin đăng nhập</Checkbox>
                            <Typography.Link>
                                Quên mật khẩu?
                            </Typography.Link>
                        </Form.Item>
                        <Form.Item style={{marginBottom: 8}}>
                            <Button style={{width: 540, height: 35, background: '#7FAD39', color: '#fff'}}>ĐĂNG NHẬP</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={signInWithGoogle} style={{width: 540, height: 35, background: '#DB4437', color: '#fff'}} icon={<Image width={30} preview={false} src="/images/google.png" />}>GOOGLE</Button>
                        </Form.Item>
                        <Typography.Paragraph style={{textAlign: 'center'}}>
                            Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với Chính sách quy định của ...
                        </Typography.Paragraph>
                    </Form>
                </div>
            </Content>
        </Layout>
    )

}

export default MerchantLogin;