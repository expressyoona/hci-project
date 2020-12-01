import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Table, Space } from "antd";

import firebase from "config/firebase-db";

const Home = () => {

    const columns = [
        {
            title: 'Taskname',
            dataIndex: 'taskname',
            key: 'id'
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => turnOnEditMode(record)}>Edit</Button>
                    <Button type="danger" onClick={() => db.child(record.id).remove()}>Delete {record.taskname}</Button>
                </Space>
            )
        }
    ]
    const [editMode, setEditMode] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [taskId, setTaskId] = useState('');
    const db = firebase.database().ref('/test');
    
    const { Item } = Form;
    const [form] = Form.useForm();

    const turnOnEditMode = (task) => {
        setEditMode(true);
        form.setFieldsValue({ taskname: task.taskname });
        setTaskId(task.id);
    }

    const submitForm = values => {
        if (editMode) {
            // Update current task
            db.child(taskId).update(values)
            setEditMode(false);
        } else {
            // Add new task
            db.push(values);
        }
        form.resetFields();
    }

    useEffect(() => {
        db.once('value', snapshot => {
            const l = []
            snapshot.forEach(childSnapshot => {
                l.push({
                    'id': childSnapshot.key,
                    'taskname': childSnapshot.val().taskname
                });
            });
            setTaskList(l);
        })

        
    }, [db]);

    return (
        <>
            <h1>Firebase Database</h1>
            <Form form={form} onFinish={submitForm}>
                <Item label="Taskname" name="taskname">
                    <Input />
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit">
                        {editMode ? "Save" : "Add task"}
                    </Button>
                </Item>
            </Form>
            <Table columns={columns} dataSource={taskList} />
        </>
    )
}

export default Home;