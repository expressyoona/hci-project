import React, { useCallback, useEffect } from "react";
import { Breadcrumb, Row, Col, Typography, List } from "antd";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MerchantService from "services/MerchantService";
import RestaurantStyle from "./style";
import RestaurantDetail from "./RestaurantDetail";
import TopReviewItem from "./TopReviewItem";
import RestaurantMenu from "./RestaurantMenu";
import RateSummary from "./RateSummary";

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

    const { Text, Title } = Typography;

    const { restaurant } = useSelector(state => state.restaurant);
    const dispatch = useDispatch();
    const { slug } = useParams();
    

    const handleData = useCallback((snapshot) => {
        snapshot.forEach(t => {
            // console.log(t.val());
            dispatch({ type: 'LOADED_RESTAURANT', payload: t.val()})
        })
    }, [dispatch]);

    useEffect(() => {
        MerchantService.getAll().orderByChild('slug').equalTo(slug).once('value', handleData);

        return () => {
            MerchantService.getAll().orderByChild('slug').equalTo(slug).off('value', handleData);
        }
    }, [slug, handleData]);

    return (
        <>
        <Row style={{padding: "0 0 15px 15px"}}>
            <Col span={16} offset={4}>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/">Trang chủ</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/restaurant">Cửa hàng</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item style={RestaurantStyle.breadcrumb}>{restaurant && restaurant.restaurantName}</Breadcrumb.Item>
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
                    renderItem={(item, index) => (
                        <List.Item key={index}>
                            <TopReviewItem 
                                Item={item}
                            />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
        <RestaurantMenu />
        <Title style={RestaurantStyle.revTitle}>Đánh giá</Title>
        <RateSummary />
        </>
    )
}

export default Restaurant;