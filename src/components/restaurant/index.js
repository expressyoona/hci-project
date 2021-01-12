import React from "react";
import { Breadcrumb, Row, Col, Typography, List } from "antd";

import RestaurantStyle from "./style";
import RestaurantDetail from "./RestaurantDetail";
import TopReviewItem from "./TopReviewItem";
import RestaurantMenu from "./RestaurantMenu";
import Review from "./Review";

const data = [
    {
        Img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        Name: "VVIP USER",
        Time: "11:11 11/11/2011",
        Star: "4",
        Title: "Quán Pro VIP",
        Content: "Quán bán đắt, sẽ mua nhiều hơn Quán bán đắt, sẽ mua nhiều hơn Quán bán đắt, sẽ mua nhiều hơn",
        Like: "10"
    },
    {
        Img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        Name: "VVIP USER",
        Time: "11:11 11/11/2011",
        Star: "4.5",
        Title: "Quán Pro VIP",
        Content: "Quán bán đắt, sẽ mua nhiều hơn Quán bán đắt, sẽ mua nhiều hơn Quán bán đắt, sẽ mua nhiều hơn",
        Like: "10"
    },
    {
        Img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        Name: "VVIP USER",
        Time: "11:11 11/11/2011",
        Star: "4",
        Title: "Quán Pro VIP",
        Content: "Quán bán đắt, sẽ mua nhiều hơn Quán bán đắt, sẽ mua nhiều hơn Quán bán đắt, sẽ mua nhiều hơn",
        Like: "10"
    },
    {
        Img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        Name: "VVIP USER",
        Time: "11:11 11/11/2011",
        Star: "4",
        Title: "Quán Pro VIP",
        Content: "Quán bán đắt, sẽ mua nhiều hơn Quán bán đắt, sẽ mua nhiều hơn Quán bán đắt, sẽ mua nhiều hơn",
        Like: "10"
    },
]

const Restaurant = () => {

    const { Text } = Typography;

    return (
        <>
        <Row style={{padding: "0 0 15px 15px"}}>
            <Col span={16} offset={4}>
                <Breadcrumb>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>Cửa hàng</Breadcrumb.Item>
                    <Breadcrumb.Item href="" style={RestaurantStyle.breadcrumb}>PL Coffee & Tea</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </Row>
        <RestaurantDetail />
        <Row style={RestaurantStyle.toprev}>
            <Col span={16} offset={4}>
                <div style={RestaurantStyle.toprevHead}>
                    <Text style={RestaurantStyle.toprevTitle}>Top đánh giá</Text>
                    <Text style={RestaurantStyle.toprevAll}>Xem tất cả</Text>
                </div>
                <List
                    grid={{
                        column: 4
                    }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <TopReviewItem 
                                Item={item}
                            />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
        <RestaurantMenu />
        <Review />
        </>
    )
}

export default Restaurant;