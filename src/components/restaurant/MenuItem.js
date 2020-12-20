import React from "react";
import { Image, Typography, Row, Col, Button } from "antd";

import RestaurantStyle from "./style";

const MenuItem = ({Img, Name, Order, Price}) => {

    //const {Img, Name, Order, Price} = Item;

    const { Text } = Typography;

    return (
        // <div style={RestaurantStyle.menuItem}>
        //     <Image src={Img} height="120px" width="120px" style={RestaurantStyle.menuItemImg} />
        //     <Text>{Name}</Text><br/>
        //     <Text>{Order}</Text>
        //     <Text>{Price}</Text>
        // </div>
        <Row align="middle">
            <Col span={4}>
                <Image src={Img} height="120px" width="120px" style={RestaurantStyle.menuItemImg} />
            </Col>
            <Col span={16}>
                <Text style={RestaurantStyle.menuItemTitle}>{Name}</Text><br/>
                <Text style={RestaurantStyle.menuItemOrder}>Số lần đặt hàng: <b style={{color: "#E92121"}}>{Order}</b></Text>
            </Col>
            <Col span={4}>
                <div  style={{float: "right"}}>
                    <Text style={RestaurantStyle.menuItemPrice}>{Price}</Text>
                    <Image src="images/restaurant/AddButton.svg" preview={false} />
                </div>
            </Col>
        </Row>

    )
}

export default MenuItem;