import React from 'react';
import { Avatar, Button, Dropdown, Input, Select, Row, Col, Space, Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FileDoneOutlined, UserOutlined, PoweroffOutlined } from "@ant-design/icons";

import { signOut } from "config/firebase-db";
import Province from 'resources/provinces.json'
import HeaderStyle from "./style";

const Header = () => {

    const { Search } = Input;
    const { Option } = Select;

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const logOutSuccess = () => {
        dispatch({ type: 'USER_LOGGED_OUT' })
        console.log('logged out success');
    }

    const logOutFailed = (err) => {
        console.log('failed to log out', err);
    }

    

    const menu = (
        <Menu>
            <Menu.Item icon={<UserOutlined />}>
                Thông tin cá nhân
            </Menu.Item>
            <Menu.Item icon={<FileDoneOutlined />}>
                Đơn hàng của tôi
            </Menu.Item>
            <Menu.Item icon={<PoweroffOutlined />} onClick={() => signOut(logOutSuccess, logOutFailed)}>
                Đăng xuất
            </Menu.Item>
        </Menu>
    )

    return (
        <Row style={HeaderStyle.root} justify="space-around" align="middle">
            <Col span={16} offset={4} >
                <Link to="/">
                    <img src="images/logo.png" alt="Logo" style={HeaderStyle.logo} />
                </Link>
                <Select defaultValue="48">
                {Object.keys(Province).map((key, index) => (<Select.Option key={index} value={Province[key].code}>{Province[key].name}</Select.Option>))}
                </Select>
                <Space size={-2} style={HeaderStyle.search}>
                <Select defaultValue="all" size={"large"} bordered>
                    <Option key="all">All categories</Option>
                </Select>
                <Search size={"large"} bordered allowClear="true" style={{width: '250%'}} placeholder="Nhập tên món ăn bạn muốn tìm" />
                </Space>
                <Space size={25} style={{float: 'right'}}>
                    <img src="images/notification.png" alt="Notification" height="20" />
                    <img src="images/cart.png" alt="Cart" height="20" />
                    {user && user.isLogged ? <Dropdown overlay={menu}><Avatar size={52} src={user.user.photoURL} alt="User avatar" /></Dropdown> : <Button href="/login" style={HeaderStyle.loginBtn}>Đăng nhập</Button>}
                </Space>
            </Col>
            <Col span={4}>
            <img src="images/en.png" alt="English" style={HeaderStyle.lang}/>
            </Col>
        </Row>
    )
}

export default Header;