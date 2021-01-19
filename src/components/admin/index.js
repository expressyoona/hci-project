import React from "react";
import { Layout } from "antd";

import AdminSider from "./AdminSider";
import AdminHeader from "./AdminHeader";
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
                <Content>
                    {/* Render content here */}
                    <div style={{height: '100px'}}></div>
                </Content>
            </Layout>
        </Layout>
    )
}   

export default AdminConsole;