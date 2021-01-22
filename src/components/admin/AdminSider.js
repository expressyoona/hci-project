import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import { HomeTwoTone, ShopTwoTone, SnippetsTwoTone, ContactsTwoTone, GiftTwoTone, ScheduleTwoTone, HistoryOutlined, WalletTwoTone, ProfileTwoTone, NotificationTwoTone, FlagTwoTone, QuestionCircleTwoTone } from "@ant-design/icons";

import AdminStyle from "./styles";


const AdminSider = () => {
    
    const { Sider } = Layout;
    const { SiderStyle } = AdminStyle;

    return (
        <Sider trigger={null} collapsible theme="light" width={320} style={SiderStyle.root}>
            <div style={SiderStyle.siderLogo}>
                <Link to={{pathname: "/admin/home"}} style={{margin: "auto"}}><img src="/images/logo.png" alt="Logo in Sider" style={SiderStyle.siderImgLogo} /></Link>
            </div>
            <Menu defaultSelectedKeys={['1']} >
                <Menu.Item key="1" icon={<HomeTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    <Link to={{pathname: "/admin/home"}} style={SiderStyle.siderItemLink}>Trang chính</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<ShopTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    <Link to={{pathname: "/admin/restaurant"}} style={SiderStyle.siderItemLink}>Cửa hàng</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<SnippetsTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    <Link to={{pathname: "/admin/order"}} style={SiderStyle.siderItemLink}>Đơn hàng</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<ContactsTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    <Link to={{pathname: "/admin/user"}} style={SiderStyle.siderItemLink}>Người dùng</Link>  
                </Menu.Item>
                <Menu.Item key="5" icon={<GiftTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    <Link to={{pathname: "/admin/promotion"}} style={SiderStyle.siderItemLink}>Khuyến mãi</Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<ScheduleTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    <Link to={{pathname: "/admin/report"}} style={SiderStyle.siderItemLink}>Báo cáo</Link>
                </Menu.Item>
                <Menu.Item key="7" icon={<HistoryOutlined style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    <Link to={{pathname: "/admin/history"}} style={SiderStyle.siderItemLink}>Lịch sử </Link>
                </Menu.Item>
                <Menu.Item key="8" icon={<WalletTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    <Link to={{pathname: "/admin/wallet"}} style={SiderStyle.siderItemLink}>Ví tiền</Link>
                </Menu.Item>
                <Menu.Item key="9" icon={<ProfileTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    <Link to={{pathname: "/admin/review"}} style={SiderStyle.siderItemLink}>Đánh giá</Link>
                </Menu.Item>
                <div style={SiderStyle.lastMenuItem}>
                    <NotificationTwoTone style={SiderStyle.siderIcon} />
                    <FlagTwoTone style={SiderStyle.siderIcon} />
                    <QuestionCircleTwoTone style={SiderStyle.siderIcon} />
                </div>
            </Menu>
        </Sider>
    )
}

export default AdminSider;