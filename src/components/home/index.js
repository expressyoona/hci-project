import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Table, Space } from "antd";

import ToDoService from "services/ToDoService";

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
                    <Button type="danger" onClick={() => removeTaskById(record.id)} >Delete {record.taskname}</Button>
                </Space>
            )
        }
    ]
    const [editMode, setEditMode] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [taskId, setTaskId] = useState('');
    
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
            ToDoService.update(taskId, values);
            setEditMode(false);
        } else {
            // Add new task
            ToDoService.create(values);
        }
        form.resetFields();
    }

    const onDataChange = (tasks) => {
        const list = [];
        tasks.forEach(task => {
            list.push({
                id: task.key,
                taskname: task.val().taskname
            })
        });
        setTaskList(list);
    };

    const removeTaskById = (taskId) => {
        ToDoService.remove(taskId);
    }

    useEffect(() => {
        ToDoService.getAll().on('value', onDataChange);

        return () => {
            ToDoService.getAll().off('value', onDataChange);
        }
    }, []);

    return (
        <>
            <h1>Firebase Database</h1>
            <Form form={form} onFinish={submitForm}>
                <Item label="Taskname" name="taskname">
                    <Input placeholder="Enter your taskname here" />
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit">
                        {editMode ? "Save" : "Add task"}
                    </Button>
                </Item>
            </Form>
            <Table columns={columns} dataSource={taskList} rowKey="id" />
        </>
    )
}

export default Home;