import React from "react";
import { Image, Typography } from "antd";

import RestaurantStyle from "./style";

const MenuItem = ({Img, Name, Order, Price}) => {

    //const {Img, Name, Order, Price} = Item;

    const { Text } = Typography;

    return (
        <div style={RestaurantStyle.menuItem}>
            <Image src={Img} height="120px" width="120px" />
            <Text>{Name}</Text>
            <Text>{Order}</Text>
            <Text>{Price}</Text>
        </div>
    )
}

export default MenuItem;