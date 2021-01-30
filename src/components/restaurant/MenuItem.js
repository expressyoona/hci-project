import React from "react";
import { Image, Typography } from "antd";

import RestaurantStyle from "./style";

const MenuItem = ({ Img, Name, Order, Price }) => {

    //const {Img, Name, Order, Price} = Item;

    const { Text } = Typography;

    return (
        <div style={RestaurantStyle.menuItem}>
                <Image src={Img} height="120px" width="120px" style={RestaurantStyle.menuItemImg} />
                <div style={RestaurantStyle.menuItemTitle}>
                    <Text style={RestaurantStyle.menuItemName}>{Name}</Text><br/>
                    <Text style={RestaurantStyle.menuItemOrder}>Số lần đặt hàng: <b style={{color: "#E92121"}}>{Order}</b></Text>
                </div>
                <div style={{right: "0px", position: "absolute"}}>
                    <Text style={RestaurantStyle.menuItemPrice}>{Price}</Text>
                    <Image src="/images/restaurant/AddButton.svg" preview={false} />
                </div>
        </div>

    )
}

export default MenuItem;