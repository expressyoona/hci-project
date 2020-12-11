import React from 'react';
import { Button, Input, Select, Row, Col, Space} from "antd";

import HeaderStyle from "./style";

const Header = () => {

    const { Search, Group } = Input;
    const { Option } = Select;

    return (
        <Row style={HeaderStyle.root} justify="space-around" align="middle">
            <Col span={16} offset={4} >
                <img src="images/logo.png" alt="Logo" style={HeaderStyle.logo} />
                <Select defaultValue="1">
                    <Option key="1">Đà Nẵng</Option>
                    <Option key="2">2</Option>
                </Select>
                <Space size={-2} style={HeaderStyle.search}>
                <Select defaultValue="all" size={"large"}>
                    <Option key="all">All categories</Option>
                </Select>
                <Search size={"large"} style={{width: '250%'}} placeholder="Nhập tên món ăn bạn muốn tìm" />
                </Space>
                <Space size={25} style={{float: 'right'}}>
                    <img src="images/notification.png" alt="Notification" height="20" />
                    <img src="images/cart.png" alt="Cart" height="20" />
                    <Button style={HeaderStyle.loginBtn}>Đăng nhập</Button>
                </Space>
            </Col>
            <Col span={4}>
            <img src="images/en.png" alt="English" style={HeaderStyle.lang}/>
            </Col>
        </Row>
    )
}

export default Header;