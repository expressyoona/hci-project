import React from "react";
import { Button, Image, Form, Input, Layout, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { signInWithGoogle } from "config/firebase-db";
import AdminSider from "components/admin/AdminSider";
import AdminHeader from "components/admin/AdminHeader";
import OrderTable from "./OrderManagement";
import Summary from "./Summary";

const MerchantPortal = () => {

    const { Content } = Layout;

    return (
        <Layout>
            <AdminSider />
            <Layout>
                <AdminHeader />
                <Content style={{marginLeft: 320, marginTop: 82}}>
                    <Summary />
                    {/* <Button>Xem toàn bộ đơn hàng</Button>
                    <Input placeholder="Tìm đơn hàng" />
                    <OrderTable /> */}
                </Content>
            </Layout>
        </Layout>
    )

}

export default MerchantPortal;