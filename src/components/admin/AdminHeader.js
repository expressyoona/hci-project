import React from "react";
import { Layout } from "antd";

import AdminStyle from "./styles";

const AdminHeader = () => {

    const { Header } = Layout;
    const { HeaderStyle } = AdminStyle;

    return (
        <Header theme="light" style={HeaderStyle.root}>
            <img src="images/admin/sider/collapsed_icon.png" alt="Collapsed icon" width={32} onClick={() => console.log('Click')} style={HeaderStyle.collapseButton} />
        </Header>
    )
}

export default AdminHeader;