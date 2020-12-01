import React from "react";
import { Form, Input, Button } from "antd";

import firebase from "config/firebase-db";

const AdminConsole = () => {
    
    const { Item } = Form;

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
        <>
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
        </>
    )
}   

export default AdminConsole;