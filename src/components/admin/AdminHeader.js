import React from "react";
import { Layout, Space, Avatar } from "antd";
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
                <Avatar size={70} src="/images/admin-image.png" />
                <SettingOutlined style={HeaderStyle.headerIcon} />
            </Space>
        </Header>
    )
}

export default AdminHeader;