import React from "react";
import { Button, Image, Form, Input, Layout, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import MerchantSider from "./MerchantSider";
import MerchantHeader from "./MerchantHeader";
import Summary from "./Summary";

const MerchantPortal = () => {

    const { Content } = Layout;

    return (
        <Layout>
            <MerchantSider />
            <Layout>
                <MerchantHeader />
                <Content style={{marginLeft: 320, marginTop: 82}}>
                    <Summary />
                </Content>
            </Layout>
        </Layout>
    )

}

export default MerchantPortal;