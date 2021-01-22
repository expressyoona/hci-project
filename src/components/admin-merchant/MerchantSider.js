import React from "react";
import { Menu, Layout } from "antd";
import { HomeTwoTone, ShopTwoTone, SnippetsTwoTone, ContactsTwoTone, GiftTwoTone, ScheduleTwoTone, HistoryOutlined, WalletTwoTone, ProfileTwoTone, NotificationTwoTone, FlagTwoTone, QuestionCircleTwoTone } from "@ant-design/icons";

import AdminStyle from "components/admin/styles";
import { Link } from "react-router-dom";


const MerchantSider = () => {
    
    const { Sider } = Layout;
    const { SiderStyle } = AdminStyle;

    return (
        <Sider trigger={null} collapsible theme="light" width={320} style={SiderStyle.root}>
            <div style={SiderStyle.siderLogo}>
                <img src="images/logo.png" alt="Logo in Sider" style={SiderStyle.siderImgLogo} />
            </div>
            <Menu defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<HomeTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    <Link to="/merchant-admin">
                        Trang chính
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<ShopTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    <Link to="/merchant-admin/restaurant" >
                        Cửa hàng
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<SnippetsTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    <Link to="/merchant-admin/order" >
                        Đơn hàng
                    </Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<ContactsTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    Người dùng  
                </Menu.Item>
                <Menu.Item key="5" icon={<GiftTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    Khuyến mãi
                </Menu.Item>
                <Menu.Item key="6" icon={<ScheduleTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    Báo cáo
                </Menu.Item>
                <Menu.Item key="7" icon={<HistoryOutlined style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    Lịch sử 
                </Menu.Item>
                <Menu.Item key="8" icon={<WalletTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    Ví tiền
                </Menu.Item>
                <Menu.Item key="9" icon={<ProfileTwoTone style={SiderStyle.siderIcon} />} style={SiderStyle.siderItem}>
                    Đánh giá
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

export default MerchantSider;