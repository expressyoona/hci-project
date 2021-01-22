import React from "react";
import { Image, Typography } from "antd";

import RestaurantContentStyle from "./style";

const AnotherRestaurant = ({Item}) => {

    const { Img, Name, Address } = Item;

    const { RestaurantInfoStyle } = RestaurantContentStyle;

    const { Title, Text } = Typography;

    return (
        <div style={{width: 200}}>
            <Image style={RestaurantInfoStyle.anotherImg} src={"images/restaurant/" + Img} />
            <Title style={RestaurantInfoStyle.anotherName} level={4}>{Name}</Title>
            <Text style={RestaurantInfoStyle.anotherAddress}>{Address}</Text>
        </div>
    )
}

export default AnotherRestaurant;