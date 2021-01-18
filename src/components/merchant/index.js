import React from "react";
import { Row, Col, Breadcrumb, Typography, Form, Input, Select, Button } from "antd";

import MerchantRegisterStyle from "./style.js";

const MerchantRegister = () => {

    const { Title, Paragraph } = Typography;

    return (
        <Row>
            <Col span={16} offset={4}>
                <Breadcrumb>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item href="" style={MerchantRegisterStyle.breadcrumb}>Đăng ký trở thành nhà hàng đối tác</Breadcrumb.Item>
                </Breadcrumb>
                <div style={MerchantRegisterStyle.merchant}>
                    <Title style={MerchantRegisterStyle.merchantTitle} level={3}>Trở thành Nhà hàng Đối tác cùng ....</Title>
                    <Paragraph style={MerchantRegisterStyle.merchantText1}>Điền vào thông tin theo mẫu sau. Lưu ý, GrabFood sẽ thu phí hoa hồng trên doanh số bán ra của Nhà hàng.</Paragraph>
                    <Paragraph style={MerchantRegisterStyle.merchantText2}>(*) Vui lòng nhập địa chỉ email chính xác.</Paragraph>
                    <Form
                        style={MerchantRegisterStyle.form}
                        layout="vertical"
                        size="large">
                        <Form.Item 
                            name="restaurantName"
                            label="Tên nhà hàng/ Quán ăn"
                            rules={[{ required: true, message: 'Vui lòng điền nhà hàng của bạn!', whitespace: true }]} >
                            <Input placeholder="Tên nhà hàng/ Quán ăn của bạn" />
                        </Form.Item>
                        <Form.Item 
                            name="merchantName"
                            label="Người đại diện"
                            rules={[{ required: true, message: 'Vui lòng điền tên người đại diện của nhà hàng!', whitespace: true }]} >
                            <Input placeholder="Người đại diện của nhà hàng/ Quán ăn" />
                        </Form.Item>
                        <Form.Item style={{ marginBottom: 0 }}>
                            <Form.Item
                                name="city"
                                label="Thành phố"
                                rules={[{ required: true, message: 'Vui lòng chọn thành phố!', whitespace: true }]}
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                                <Select placeholder="Thành phố">
                                    <Select.Option value="1">Đà Nẵng</Select.Option>
                                    <Select.Option value="2">TP.Hồ Chí Minh</Select.Option>
                                    <Select.Option value="3">Hà Nội</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="cuisine"
                                label="Mặt hàng ẩm thực"
                                rules={[{ required: true, message: 'Vui lòng chọn mặt hàng ẩm thực!', whitespace: true }]}
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}>
                                <Select placeholder="Cuisine">
                                    <Select.Option value="1">Rice - Cơm</Select.Option>
                                    <Select.Option value="2">Noodles & Congee - Bún/Phở/Mỳ/Cháo</Select.Option>
                                    <Select.Option value="3">Bread - Bánh mỳ</Select.Option>
                                </Select>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item 
                            name="street"
                            label="Địa chỉ kinh doanh"
                            rules={[{ required: true, message: 'Vui lòng điền địa chỉ của cửa hàng!', whitespace: true }]} >
                            <Input placeholder="Số nhà, tên đường" />
                        </Form.Item>
                        <Form.Item
                            name="phonenumber"
                            label="Số điện thoại"
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại dùng để liên lạc với cửa hàng!', whitespace: true }]} >
                            <Input placeholder="0987 654 321" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[{type: 'email', message: 'E-mail sai định dạng!'},{ required: true, message: 'Vui lòng nhập email dùng để liên lạc với cửa hàng!', whitespace: true }]} >
                            <Input placeholder="example@restaurant.com" />
                        </Form.Item>
                        <Form.Item
                            name="type"
                            label="Loại hình Kinh doanh"
                            rules={[{ required: true, message: 'Vui lòng chọn thành phố!', whitespace: true }]} >
                            <Select placeholder="Loại hình Kinh doanh">
                                <Select.Option value="1">Công ty một thành viên</Select.Option>
                                <Select.Option value="2">Công ty hợp danh</Select.Option>
                                <Select.Option value="3">Công ty tư nhân</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button style={MerchantRegisterStyle.formButton} type="primary" htmlType="submit">Hoàn tất</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}

export default MerchantRegister;