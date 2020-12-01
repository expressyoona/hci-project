import React from 'react';
import { Button, Input, Select, PageHeader } from "antd";

import HeaderStyle from "./style";

const MyHeader = () => {

    const { Search, Group } = Input;
    const { Option } = Select;

    return (
        <PageHeader style={HeaderStyle.root}>
            
            <Group>
                <img src="images/logo.png" alt="Logo" width="32px" height="32px" />
                <Select defaultValue="1">
                    <Option key="1">Đà Nẵng</Option>
                    <Option key="2">2</Option>
                </Select>
                <Select defaultValue="all">
                    <Option key="all">All categories</Option>
                </Select>
                <Search style={{width: '50%'}} placeholder="Search something..." />
                <img src="images/notification.png" alt="Notification" height="20" />
                <img src="images/cart.png" alt="Cart" height="20" />
                <Button style={HeaderStyle.loginBtn}>Đăng nhập</Button>
                <img src="images/en.png" alt="English" />
            </Group>
        </PageHeader>
    )
}

export default MyHeader;