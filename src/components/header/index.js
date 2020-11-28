import React from 'react';

import { Layout, Input, Select } from "antd";

export const MyHeader = () => {
    const { Header } = Layout;
    const { Search } = Input;
    const { Option } = Select;
    return (
        <Header >
            <Input.Group compact>
                <Select style={{width: '10%'}}>
                    <Option key="1">1</Option>
                    <Option key="2">2</Option>
                </Select>
                <Search style={{width: '90%'}} placeholder="Search something..." />
            </Input.Group>
            
        </Header>
    )
}