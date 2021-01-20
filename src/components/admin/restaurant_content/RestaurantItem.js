import React from "react";
import { Image, Typography } from "antd";
import { EnvironmentTwoTone, PhoneTwoTone, MailTwoTone, ClockCircleOutlined } from "@ant-design/icons";
import RestaurantContentStyle from "./style";

const RestaurantItem = ({Item}) => {

    const { Img, Name, Address, PhoneNumber, Email, Time, Status } = Item

    const { Title, Text } = Typography;

    return (
        <div style={RestaurantContentStyle.item}>
            <div style={RestaurantContentStyle.itemImage}>
                <Image preview={false} src={"images/restaurant/" + Img} style={RestaurantContentStyle.itemImg} />
                <p style={RestaurantContentStyle.itemStatus}>{Status}</p>
            </div>
            <div style={RestaurantContentStyle.itemInfo}>
                <Title style={RestaurantContentStyle.itemName}>{Name}</Title>
                <p style={RestaurantContentStyle.itemAddress}><EnvironmentTwoTone /> {Address}</p>
                <Text style={RestaurantContentStyle.itemPhoneNumber}><PhoneTwoTone /> {PhoneNumber}</Text>
                <Text><MailTwoTone /> {Email}</Text>
                <Text style={RestaurantContentStyle.itemTime}><ClockCircleOutlined /> {Time}</Text>
            </div>
        </div>
    )
}

export default RestaurantItem;