import React from "react";
import { Layout } from "antd";

import AdminSider from "components/admin/AdminSider";
import AdminHeader from "components/admin/AdminHeader";

import RestaurantContent from "./RestaurantContent";
import AdminStyle from "components/admin/styles";



const AdminRestaurant = () => {
    
    const { Content } = Layout;

    return (
        <Layout>
            <AdminSider />
            <Layout>
                <AdminHeader />
                <Content style={AdminStyle.ContentRoot}>
                    <RestaurantContent />
                </Content>
            </Layout>
        </Layout>
    )
}   

export default AdminRestaurant;