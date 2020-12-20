import React from "react";
import { Form, Input, Button, Layout, Menu } from "antd";

import firebase from "config/firebase-db";
import SiderStyle from "./styles";


const AdminConsole = () => {
    
    const { Item } = Form;
    const { Sider, Header, Content } = Layout;

    // const db = firebase.database().ref('/user');
    const auth = firebase.auth();
    
    const addUser = values => {
        // console.log(values.email, values.password);
        auth.createUserWithEmailAndPassword(values.email, values.password)
        .then(user => {
            console.log(user.userID);
        }).catch(error => {
            console.log(error);
        });
    }


    return (
        <Layout>
            <Header>

            </Header>
            <Layout>
                <Sider width={320} style={SiderStyle.root}>
                    <Menu>
                        <Menu.Item icon={<img src="images/admin/sider/HouseLine.png" alt="Home" height={24} />}>
                            Trang chính
                        </Menu.Item>
                        <Menu.Item icon={<img src="images/admin/sider/HouseLine.png" alt="Home" height={24} />}>
                            Cửa hàng
                        </Menu.Item>
                        <Menu.Item icon={<img src="images/admin/sider/Order.png" alt="Home" height={24} />}>
                            Đơn hàng
                        </Menu.Item>
                        <Menu.Item icon={<img src="images/admin/sider/HouseLine.png" alt="Home" height={24} />}>
                            Người dùng
                        </Menu.Item>
                        <Menu.Item icon={<img src="images/admin/sider/Gift.png" alt="Home" height={24} />}>
                            Khuyến mãi
                        </Menu.Item>
                        <Menu.Item icon={<img src="images/admin/sider/Statistics.png" alt="Home" height={24} />}>
                            Báo cáo
                        </Menu.Item>
                        <Menu.Item icon={<img src="images/admin/sider/HouseLine.png" alt="Home" height={24} />}>
                            Lịch sử
                        </Menu.Item>
                        <Menu.Item icon={<img src="images/admin/sider/HouseLine.png" alt="Home" height={24} />}>
                            Ví tiền
                        </Menu.Item>
                        <Menu.Item icon={<img src="images/admin/sider/HouseLine.png" alt="Home" height={24} />}>
                            Đánh giá
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content>
                        <h1>Add user</h1>
                        <Form layout="inline" onFinish={addUser}>
                            <Item label="Email" name="email">
                                <Input />
                            </Item>
                            <Item label="Password" name="password">
                                <Input.Password />
                            </Item>
                            <Item>
                            <Button type="primary" htmlType="submit">
                                Add
                            </Button>
                            </Item>
                        </Form>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}   

export default AdminConsole;