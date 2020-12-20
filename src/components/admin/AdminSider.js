import React from "react";
import { Divider, Menu, Layout } from "antd";

import AdminStyle from "./styles";


const AdminSider = () => {
    
    const { Sider } = Layout;
    const { SiderStyle } = AdminStyle;

    const menuItem = [
        { img: 'images/admin/sider/HouseLine.png' , label: 'Trang chính' },
        { img: 'images/admin/sider/HouseLine.png' , label: 'Cửa hàng' },
        { img: 'images/admin/sider/Order.png' , label: 'Đơn hàng' },
        { img: 'images/admin/sider/HouseLine.png' , label: 'Người dùng' },
        { img: 'images/admin/sider/Gift.png' , label: 'Khuyến mãi' },
        { img: 'images/admin/sider/Statistics.png' , label: 'Báo cáo' },
        { img: 'images/admin/sider/HouseLine.png' , label: 'Lịch sử' },
        { img: 'images/admin/sider/HouseLine.png' , label: 'Ví tiền' },
        { img: 'images/admin/sider/HouseLine.png' , label: 'Đánh giá' },
    ];

    const bottomMenuItem = [
        { img: 'images/admin/sider/Megaphone.png' },
        { img: 'images/admin/sider/Flag.png' },
        { img: 'images/admin/sider/Question.png' }
    ]

    return (
        <Sider trigger={null} collapsible theme="light" width={320} style={SiderStyle.root}>
            <div>
                <img src="images/logo.png" alt="Logo in Sider" height={66} style={SiderStyle.siderLogo} />
            </div>
            <Divider />
            <Menu>
                {menuItem.map((item, index) => {
                    return (
                        <Menu.Item key={index} icon={<img src={item.img } alt="Home" height={24} />}>
                            {item.label}
                        </Menu.Item>    
                    )
                })}
                <div style={SiderStyle.lastMenuItem}>
                {bottomMenuItem.map((item, index) => {
                    return (
                        <img key={index} src={item.img} alt="Bottom menu item" width={24} />
                    )
                })}
                </div>
            </Menu>
        </Sider>
    )
}

export default AdminSider;