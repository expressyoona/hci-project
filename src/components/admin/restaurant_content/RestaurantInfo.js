import React from "react";
import { Breadcrumb, Typography, Space, notification } from "antd";

import RestaurantContentStyle from "./style";
import Info from "./Info";
import AnotherRestaurant from "./AnotherRestaurant";

const data = [
    {
        Img: "Starbuck.png",
        Name: "Starbuck",
        Address: "50 Bạch Đằng, quận Hải Châu, thành phố Đà Nẵng ",
        Representater: "Starbuck",
        PhoneNumber: "0999999999",
        Email: "username@domain.com",
        Cuisine: "Cafe/Beverage",
        Status: "Đã xác nhận",
        Time: "Đã xác nhận 1 giây trước bởi Administrator"
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

const openNotification = () => {
    notification.success({
        message: "Thành công",
        description: "Đã xác nhận cửa hàng này làm đối tác.",
        duration: 10
    });
};

const RestaurantInfo = () => {

    const { RestaurantInfoStyle } = RestaurantContentStyle;

    const { Title } = Typography;

    openNotification();
    return (
        <div style={RestaurantInfoStyle.root}>
            <Breadcrumb>
                <Breadcrumb.Item>Cửa hàng</Breadcrumb.Item>
                <Breadcrumb.Item href="" style={RestaurantInfoStyle.breadcrumb}>Thông tin</Breadcrumb.Item>
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