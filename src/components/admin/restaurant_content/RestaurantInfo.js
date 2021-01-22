import React from "react";
import { Breadcrumb, Typography, Space } from "antd";
import { Link } from "react-router-dom";

import RestaurantContentStyle from "./style";
import Info from "./Info";
import AnotherRestaurant from "./AnotherRestaurant";

const data = [
    {
        Img: "PLCoffeeTea_Small.png",
        Name: "Phúc Long Tea",
        Address: "Tầng 2, LOTTE Mart, 6 Nại Nam, P. Hòa Cường Bắc, Q. Hải Châu, Tp. Đà Nẵng",
        Representater: "Phúc Long",
        PhoneNumber: "099887766",
        Email: "username@domain.com",
        Cuisine: "Cafe/Beverage",
        Status: "Đang chờ",
        Time: "Đăng ký 15 phút trước"
        // Status: "Đã xác nhận",
        // Time: "Đã xác nhận 1 giây trước bởi Administrator"
    }
]

const anotherData = [
    {
        Img: "Starbuck.png",
        Name: "Starbuck",
        Address: "50 Bạch Đằng, quận Hải Châu, thành phố Đà Nẵng "
    },
    {
        Img: "Starbuck.png",
        Name: "Starbuck",
        Address: "50 Bạch Đằng, quận Hải Châu, thành phố Đà Nẵng "
    },
    {
        Img: "Starbuck.png",
        Name: "Starbuck",
        Address: "50 Bạch Đằng, quận Hải Châu, thành phố Đà Nẵng "
    },
    {
        Img: "Starbuck.png",
        Name: "Starbuck",
        Address: "50 Bạch Đằng, quận Hải Châu, thành phố Đà Nẵng "
    },
    {
        Img: "Starbuck.png",
        Name: "Starbuck",
        Address: "50 Bạch Đằng, quận Hải Châu, thành phố Đà Nẵng "
    },
    {
        Img: "Starbuck.png",
        Name: "Starbuck",
        Address: "50 Bạch Đằng, quận Hải Châu, thành phố Đà Nẵng "
    },
]

const RestaurantInfo = () => {

    const { RestaurantInfoStyle } = RestaurantContentStyle;

    const { Title } = Typography;

    return (
        <div style={RestaurantInfoStyle.root}>
            <Breadcrumb>
                <Breadcrumb.Item><Link to={{pathname: "../restaurant"}}>Cửa hàng</Link></Breadcrumb.Item>
                <Breadcrumb.Item style={RestaurantInfoStyle.breadcrumb}>Thông tin</Breadcrumb.Item>
            </Breadcrumb>
            <div style={RestaurantInfoStyle.infomation}>
                {data.map(item => {
                    return (
                        <>
                        <Info Item={item} />
                        </>
                    )
                })}
            </div>
            <div style={{marginTop: 40}}>
                <Title level={4}>Các cửa hàng cần duyệt</Title>
                <Space size={50}>
                    {anotherData.map(item => {
                        return (
                            <>
                            <AnotherRestaurant Item={item} />
                            </>
                        )
                    })}
                </Space>
            </div>
        </div>
    )
}

export default RestaurantInfo;