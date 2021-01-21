import React from "react";
import { Layout } from "antd";

import AdminSider from "components/admin/AdminSider";
import AdminHeader from "components/admin/AdminHeader";

import RestaurantInfo from "./RestaurantInfo";
import AdminStyle from "components/admin/styles";



const AdminRestaurantInfo = () => {
    
    const { Content } = Layout;

    return (
        <Layout>
            <AdminSider />
            <Layout>
                <AdminHeader />
                <Content style={AdminStyle.ContentRoot}>
                    <RestaurantInfo />
                </Content>
            </Layout>
        </Layout>
    )
}   

export default AdminRestaurantInfo;