import React from 'react';
import { Row, Col, Typography, List } from "antd";

// import HomeStyle from "./styles";
import RestaurantItem from "./RestaurantItem";

const Data = [
    {
        Name: "Phúc Long Tea", 
        Address: "Tầng 2, LOTTE Mart, 6 Nại Nam, Tp. Đà Nẵng", 
        Img: "PLCoffeeTea.png", 
        Time: "Ăn trưa", 
        Discount: "10% - 20%"
    },
    {
        Name: "Starbuck", 
        Address: "50 Bạch Đằng, Hòa Thuận Đông, Hải Châu, Đà Nẵng", 
        Img: "Starbuck.png", 
        Time: "Cả ngày", 
        Discount: "20% - 30%"
    },
    {
        Name: "Phúc Long Tea", 
        Address: "6 Nại Nam, Tp. Đà Nẵng", 
        Img: "PLCoffeeTea.png", 
        Time: "Ăn tối", 
        Discount: "20% - 30%"
    },
    {
        Name: "Starbuck", 
        Address: "50 Bạch Đằng, Hòa Thuận Đông, Hải Châu, Đà Nẵng", 
        Img: "Starbuck.png", 
        Time: "Cả ngày", 
        Discount: "20% - 30%"
    },
]

const BestRestaurant = () => {

    const { Title } = Typography;

    return (
        <Row>
            <Col span={16} offset={4}>
                <Title level={3} style={{textAlign: "center", textTransform: "uppercase"}}>Top nhà hàng nổi bật trong tháng</Title>
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
                    dataSource={Data} 
                    renderItem={item => (
                        <List.Item>
                            <RestaurantItem Item={item} />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    )
}

export default BestRestaurant;