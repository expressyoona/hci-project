import React from "react";
import { Row, Col, Space, List, Typography, Select, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import RestaurantStyle from "./style";
import MenuItem from "./MenuItem";
import "./style.css";

const data = [
    {
        menu: "Ăn vặt",
    },
    {
        menu: "Trà trái cây",
    },
    {
        menu: "Kem sữa"
    },
    {
        menu: "Sữa"
    },
    {
        menu: "Nước trái cây"
    },
    {
        menu: "Đá xay"
    },
    {
        menu: "Sinh tố"
    },
    {
        menu: "Soda"
    },
    {
        menu: "Coffee"
    },
    {
        menu: "Món khác"
    },
]

const RestaurantMenu = () => {

    const { Text } = Typography;
    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Row style={RestaurantStyle.menuRoot}>
            <Col span={3} offset={4} style={RestaurantStyle.menuSidebar}>
                <Space direction="vertical">
                    <List 
                        size="small"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item style={{border: "none"}}>
                                <Text style={RestaurantStyle.menuSidebarItem}>{item.menu}</Text>
                            </List.Item>
                        )}
                    />
                </Space>
            </Col>
            <Col span={13} style={RestaurantStyle.menu}>
                <Space>
                    <Input size="large"  style={{ width: '100%' }} allowClear placeholder="Tìm kiếm món ăn trong menu" prefix={<SearchOutlined style={{color: "#BFBFBF"}} />} />
                    <Select defaultValue="Sắp xếp theo" size="large" onChange={handleChange}>
                        <Option value="price1">Giá (từ cao tới thấp)</Option>
                        <Option value="price2">Giá (từ thấp tới cao)</Option>
                    </Select>
                </Space>
                <MenuItem Img="images/restaurant/menu/KhoaiTayChien.png" Name="KHOAI TAY CHIEN" Order="So lan dat hang tren 100 lan" Price="20000" />
            </Col>
        </Row>
    )
}

export default RestaurantMenu;