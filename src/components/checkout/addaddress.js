import React from "react";
import { Row, Col, Breadcrumb, notification, Form, Input, Select, Cascader, Checkbox, Button } from "antd";

import CheckOutStyle from "./style.js";

const AddAddress = () => {

    const { Option } = Select;

    const openNotification = () => {
        notification.warning({
            message: "Thông báo",
            description: "Bạn chưa có địa chỉ mặc định, vui lòng thêm địa chỉ để người vận chuyển có thể giao hàng cho bạn.",
            duration: 10
        });
    };
    openNotification();

    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
      const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const residences = [
        {
            value: 'danang',
            label: 'Đà Nẵng',
            children: [
                {
                    value: 'nguhanhson',
                    label: 'Ngũ Hành Sơn',
                    children: [
                        {
                            value: 'hoaquy',
                            label: 'Hoà Quý',
                        },
                        {
                            value: 'hoahai',
                            label: 'Hoà Hải',
                        },
                    ],
                },
            ],
        },
        {
            value: 'quangnam',
            label: 'Quảng Nam',
            children: [
                {
                    value: 'tienphuoc',
                    label: 'Tiên Phước',
                    children: [
                        {
                            value: 'tiencanh',
                            label: 'Tiên Cảnh',
                        },
                        {
                            value: 'tienhiep',
                            label: 'Tiên Hiệp',
                        },
                    ],
                },
            ],
        },
    ];

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="84">+84</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Row>
            <Col span={16} offset={4}>
                <Breadcrumb>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>Thanh toán</Breadcrumb.Item>
                    <Breadcrumb.Item href="" style={CheckOutStyle.breadcrumb}>Thêm địa chỉ</Breadcrumb.Item>
                </Breadcrumb>
                <div style={CheckOutStyle.add}>
                    <p style={CheckOutStyle.addTitle}>Thêm địa chỉ</p>
                    <Form 
                        style={CheckOutStyle.form}
                        size="large"
                        {...formItemLayout}
                        form={form}
                        name="addaddress"
                        initialValues={{
                            residence: ['Thành phố(Tỉnh)', 'Quận(Huyện)', 'Phường(Xã)'],
                            prefix: '84',
                        }}
                        scrollToFirstError>
                        <Form.Item 
                            name="name"
                            label="Họ và tên"
                            rules={[{ required: true, message: 'Vui lòng điền tên của bạn!', whitespace: true }]}
                            >
                            <Input />
                        </Form.Item>
                        <Form.Item 
                            name="address"
                            label="Địa chỉ"
                            rules={[{ required: true, type: 'array', message: 'Vui lòng điền địa chỉ của bạn!'},]}>
                            <Cascader options={residences} />
                        </Form.Item>
                        <Form.Item 
                            name="street"
                            label="Số nhà"
                            rules={[{ required: true, message: 'Vui lòng điền địa chỉ cụ thể của bạn!', whitespace: true }]}
                            >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Số điện thoại"
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại của bạn!' }]}
                            >
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            {...tailFormItemLayout}
                        >
                            <Checkbox>Đăt làm địa chỉ mặt định</Checkbox>
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button style={CheckOutStyle.addButton} type="primary" htmlType="submit">Hoàn tất</Button>
                        </Form.Item>
                    </Form>
                </div>  
            </Col>
        </Row>
    )
}

export default AddAddress;