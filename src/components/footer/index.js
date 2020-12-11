import React from 'react';
import {Row, Col, Typography, Space, Input}  from "antd";

import FooterStyle from "./style";

const Footer = () => {

    const { Text, Link } = Typography;
    const { Search } = Input;

    return (
        <>
        <Row style={FooterStyle.root}>
            <Col span={4} offset={4}>
                <img src="images/logo.png" alt="Logo" style={FooterStyle.logo} />
                <Space direction="vertical" style={{fontSize: '16px'}}>
                    <Text>Điện thoại : 0912 3456 78</Text>
                    <Text>Email: contact@email.com</Text>
                </Space>
            </Col>
            <Col span={4} style={{marginTop: '80px'}}>
                <Text strong style={{fontSize: '16px'}}>Về chúng tôi</Text>
                <Space direction="vertical" style={{marginTop: '20px'}}>
                    <Link href="#">Giới thiệu</Link>
                    <Link href="#">Chính sách bảo mật thanh toán</Link>
                    <Link href="#">Chính sách bảo mật thông tin cá nhân</Link>
                    <Link href="#">Chính sách giải quyết khiếu nại</Link>
                    <Link href="#">Điều khoản sử dụng</Link>
                </Space>
            </Col>
            <Col span={4} style={{marginTop: '80px'}}> 
                <Text strong style={{fontSize: '16px'}}>Hợp tác và liên kết</Text>
                <Space direction="vertical" style={{marginTop: '20px'}}>
                    <Link href="#">Quy chế hoạt đồng Sàn GDTMĐT</Link>
                    <Link href="#">Bán hàng cùng Logo</Link>
                </Space>
            </Col>
            <Col span={4} style={{marginTop: '80px'}}>
                <Text strong style={{fontSize: '18px'}}>Đăng ký nhận bản tin</Text>
                <Space direction="vertical" style={{marginTop: '20px'}}> 
                    <Text>Nhận thông tin cập nhật qua email về cửa hàng mới nhất của chúng tôi và các ưu đãi đặc biệt.</Text>
                    <Search 
                        placeholder="Nhập email của bạn"
                        allowClear
                        enterButton="ĐĂNG KÝ"
                        size="middle"
                    />
                </Space>
            </Col>
        </Row>
        <Row style={{backgroundColor: '#F3F6FA'}}>
            <Col span={16} offset={4} style={FooterStyle.cp}>
                <Text type="secondary">Copyright ©2020 All rights reserved</Text>
            </Col>
        </Row>
        </>
    )
    
}

export default Footer;