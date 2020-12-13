import React from 'react';
import { Row, Col, Typography, List } from "antd";

import HomeStyle from "./styles";
import Dish from "./Dish";

const DishData = [
    {
        "img": "images/food-type/DoAn.png",
        "name": "Đồ ăn",
        "totaladdress": "213"
    },
    {
        "img": "images/food-type/drink.png",
        "name": "Đồ uống",
        "totaladdress": "312"
    },
    {
        "img": "images/food-type/DoChay.png",
        "name": "Đồ chay",
        "totaladdress": "123"
    },
    {
        "img": "images/food-type/TrangMieng.png",
        "name": "Tráng miệng",
        "totaladdress": "231"
    },
    {
        "img": "images/food-type/BanhKem.png",
        "name": "Bánh kem",
        "totaladdress": "111"
    },
    {
        "img": "images/food-type/DoAnNhaLam.png",
        "name": "Đồ ăn nhà làm",
        "totaladdress": "222"
    },
    {
        "img": "images/food-type/DoAnViaHe.png",
        "name": "Đò ăn vỉa hè",
        "totaladdress": "333"
    },
    {
        "img": "images/food-type/Pizza.png",
        "name": "Pizza / Burger",
        "totaladdress": "123"
    },
    {
        "img": "images/food-type/MonGa.png",
        "name": "Món gà",
        "totaladdress": "123"
    },
    {
        "img": "images/food-type/MonLau.png",
        "name": "Món lẩu",
        "totaladdress": "321"
    },
    {
        "img": "images/food-type/MiPho.png",
        "name": "Mì phở",
        "totaladdress": "222"
    },
    {
        "img": "images/food-type/Sushi.png",
        "name": "Sushi",
        "totaladdress": "123"
    }
    
]

const AreYouHungry = () => {
    
    const { Title } = Typography;

    return (
        <>
        <Typography>
            <Title style={HomeStyle.title}>BẠN ĐANG ĐÓI ? <br/> ĐÂY LÀ MỘT SỐ LỰA CHỌN DÀNH CHO BẠN</Title>
        </Typography>
        <Row>
            <Col span={16} offset={4}>
                <List
                    grid={{
                        gutter: [30, 15],
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 4,
                        xxl: 4,
                    }}
                    dataSource={DishData} 
                    renderItem={item => (
                        <List.Item>
                            <Dish Img={item.img} Name={item.name} TotalAddress={item.totaladdress} />
                        </List.Item>
                    )}
                />
            </Col>
        </Row> 
        </>
    )
}

export default AreYouHungry;