import React from "react";
import { Image, Typography } from "antd";
import { Link } from "react-router-dom";
import { EnvironmentTwoTone, PhoneTwoTone, MailTwoTone, ClockCircleOutlined } from "@ant-design/icons";
import RestaurantContentStyle from "./style";

const RestaurantItem = ({Item}) => {

    const { RestaurantItemStyle } = RestaurantContentStyle;

    const { Img, Name, Address, PhoneNumber, Email, Time, Status } = Item

    const { Title, Text } = Typography;

    return (
        <div style={RestaurantItemStyle.item}>
            <div style={RestaurantItemStyle.itemImage}>
                <Image preview={false} src={"/images/restaurant/" + Img} style={RestaurantItemStyle.itemImg} />
                <p style={RestaurantItemStyle.itemStatus}>{Status}</p>
            </div>
            <div style={RestaurantItemStyle.itemInfo}>
                <Title style={RestaurantItemStyle.itemName}><Link to={{pathname: "restaurant/detail"}}>{Name}</Link></Title>
                <p style={RestaurantItemStyle.itemAddress}><EnvironmentTwoTone /> {Address}</p>
                <Text style={RestaurantItemStyle.itemPhoneNumber}><PhoneTwoTone /> {PhoneNumber}</Text>
                <Text><MailTwoTone /> {Email}</Text>
                <Text style={RestaurantItemStyle.itemTime}><ClockCircleOutlined /> {Time}</Text>
            </div>
        </div>
    )
}

export default RestaurantItem;