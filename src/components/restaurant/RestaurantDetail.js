import React from "react";
import { Row, Col, Image, Typography, Rate, Space, Skeleton } from "antd";
import { ClockCircleTwoTone, DollarCircleTwoTone, FacebookFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";

import RestaurantStyle from "./style";

const RestaurantDetail = () => {

    const { restaurant } = useSelector(state => state.restaurant);
    // console.log('res',restaurant);

    const { Text, Title } = Typography;
    
    return (
        <>
        <Row gutter={30} style={{margin: "auto 0px"}} align="bottom">
            <Col span={8} offset={4}>
                <Image src="/images/restaurant/PLCoffeeTea.png" />
            </Col>
            <Col span={8}>
                <Space direction="vertical" style={{width: '100%'}}>
                    <Text style={RestaurantStyle.resType} >Coffee/Dessert</Text>
                    {restaurant ? 
                        <>
                            <Title style={RestaurantStyle.resName}>{restaurant.restaurantName}</Title>
                            <Text strong >{restaurant.address}</Text>
                        </> :
                    <Skeleton style={{ width: 200 }} paragraph={{ rows: 2 }}/>}
                    <div>
                        <Rate disabled defaultValue={5} />
                        <Text style={RestaurantStyle.resReviewCount}>(18 đánh giá)</Text>
                    </div>
                    <div>
                        <ClockCircleTwoTone />
                        <Text style={RestaurantStyle.resOpen}>Đang mở cửa</Text>
                        <Text>(07:00 - 22:00)</Text>
                    </div>
                    <div>
                        <DollarCircleTwoTone />
                        <Text style={RestaurantStyle.resPrice}>10,000 - 35,000 VNĐ</Text>
                    </div>
                    <div style={RestaurantStyle.map}>
                        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1612.0356319386688!2d108.22120546008962!3d16.060897388770424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ccf84efb0f%3A0x60496251c7e11206!2zMjggxJAuIEzDqiDEkMOsbmggRMawxqFuZywgUGjGsOG7m2MgTmluaCwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1607930627113!5m2!1svi!2s" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </Space>
            </Col>
        </Row>
        <Row gutter={30} style={{margin: "auto 0px"}}>
            <Col span={8} offset={12}>
                <Space style={RestaurantStyle.fee} size={50}>
                    <div>
                        <Text strong>Phí dịch vụ</Text><br/>
                        <Text>0.0 % phí dịch vụ</Text>
                    </div>
                    <div>
                        <Text strong>Dịch vụ bởi</Text><br/>
                        <Text>My Team</Text>
                    </div>
                    <div>
                        <Text strong>Thời gian chuẩn bị</Text><br/>
                        <Text>10 phút</Text>
                    </div>
                    <div>
                        <Text strong>Chia sẻ</Text><br/>
                        <FacebookFilled />
                    </div>
                </Space>
            </Col>
        </Row>
        </>
    )
}

export default RestaurantDetail;