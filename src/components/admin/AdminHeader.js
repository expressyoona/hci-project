import React from "react";
import { Layout, Space } from "antd";
import { MenuOutlined, AlignLeftOutlined, BellOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";

import AdminStyle from "./styles";

const AdminHeader = () => {

    const { Header } = Layout;
    const { HeaderStyle } = AdminStyle;

    return (
        <Header theme="light" style={HeaderStyle.root}>
            <MenuOutlined style={{...HeaderStyle.collapseButton, ...HeaderStyle.headerIcon}} />
            <Space style={HeaderStyle.headerRight}>
                <AlignLeftOutlined style={HeaderStyle.headerIcon} />
                <BellOutlined style={HeaderStyle.headerIcon} />
                <MailOutlined style={HeaderStyle.headerIcon} />
                <SettingOutlined style={HeaderStyle.headerIcon} />
            </Space>
        </Header>
    )
}

export default AdminHeader;