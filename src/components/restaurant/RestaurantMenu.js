import React, { useState, useEffect } from "react";
import { Row, Col, Space, List, Typography, Select, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import RestaurantStyle from "./style";
import MenuItem from "./MenuItem";
import RestaurantService from "services/RestaurantService";

const data = [
    {
        menu: "Ăn vặt",
        selected: true
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

    const [foodList ,setFoodList] = useState([]);


    useEffect(() => {
        RestaurantService.getAll().once('value', onDataChange);
    });


    const onDataChange = (dishes) => {
        const list = [];
        dishes.forEach(dish => {
            const food = [];
            dish.child('list').forEach(f => {
                food.push({
                    Name: f.val().name,
                    Order: f.val().order,
                    Price: f.val().price,
                    Img: f.val().img
                })
            })
            //console.log(food);
            list.push({
                // id: food.key,
                dishName: dish.val().name,
                foodList: food
            })
        });
        setFoodList(list);
        // console.log(foodList);
    }


    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <>
        
        <Row style={RestaurantStyle.menuRoot}>
            <Col span={24}>
                <Row>
                    <Col span={3} offset={4} >
                        <div style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 30, marginBottom: 19}}>
                            MENU
                        </div>
                    </Col>
            </Row>
            </Col>
            <Col span={3} offset={4} style={RestaurantStyle.menuSidebar}>
                <Space direction="vertical">
                    <List 
                        size="small"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item style={{border: "none", padding: 0, marginTop: 20, marginLeft: 36}}>
                                <Text style={item.selected ? RestaurantStyle.menuSidebarItemSelected : RestaurantStyle.menuSidebarItem}>{item.menu}</Text>
                            </List.Item>
                        )}
                    />
                </Space>
            </Col>
            {/* <ul>
            {foodList.map((item, index) => {
                return (
                    <>
                        <li>{item.dishName}</li>
                        <ul>
                            {item.foodList.map((item, index) => {
                                return <>
                                    <li>{item.Name}</li>
                                    <li>{item.Order}</li>
                                    <li>{item.Price}</li>
                                    <li>{item.Img}</li>
                                </>
                            })}
                        </ul>
                    </>
                )
            })}
            </ul> */}
            <Col span={13} style={RestaurantStyle.menu}>
                <div style={RestaurantStyle.menuMain}>
                    <Input size="large" style={RestaurantStyle.searchBar} allowClear placeholder="Tìm kiếm món ăn trong menu" prefix={<SearchOutlined style={{color: "#BFBFBF"}} />} />
                    <Select defaultValue="Sắp xếp theo" size="large" onChange={handleChange}>
                        <Option value="price1">Giá (từ cao tới thấp)</Option>
                        <Option value="price2">Giá (từ thấp tới cao)</Option>
                    </Select>
                </div>
                <List
                    dataSource={foodList}
                    renderItem={item => (
                        <>
                        <p style={RestaurantStyle.dishName}>{item.dishName}</p>
                        {item.foodList.map((item, index) => {
                            return (
                                <List.Item key={index}>
                                    <MenuItem 
                                        Img={"/images/restaurant/menu/" + item.Img}
                                        Name={item.Name}
                                        Order={item.Order}
                                        Price={item.Price}
                                    />
                                </List.Item>
                            )
                        })}
                        </>
                    )}
                />
            </Col>
        </Row>
        </>
    )
}

export default RestaurantMenu;