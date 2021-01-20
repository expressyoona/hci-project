import React from "react";
import { Layout } from "antd";

import AdminSider from "./AdminSider";
import AdminHeader from "./AdminHeader";
import RestaurantContent from "./restaurant_content/RestaurantContent";
import AdminStyle from "./styles";
// import firebase from "config/firebase-db";


const AdminConsole = () => {
    
    const { Content } = Layout;

    // const db = firebase.database().ref('/user');
    // const auth = firebase.auth();


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

export default AdminConsole;