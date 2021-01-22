import { React } from "react";
import { Image, Space, Typography } from "antd";
import { Link } from "react-router-dom";

import HomeStyle from "./styles";

const RestaurantItem = ({Item}) => {

    const { Name, Address, Img, Time, Discount } = Item;

    const { Text } = Typography;

    return (
        <Space direction="vertical" size={5} style={HomeStyle.res}>
            <Link to="/restaurant"><Image src={"images/restaurant/"+Img} preview={false} style={HomeStyle.resImage} /></Link>
            <Text style={HomeStyle.resName}><Link to="/restaurant" style={{color: "#000000"}}>{Name}</Link></Text>
            <Text style={HomeStyle.resAddress}>{Address}</Text>
            <div style={{backgroundColor: "#d8eef5", textAlign: "center"}}>
                <Text style={HomeStyle.resTime}>{Time}</Text>
                <Text style={HomeStyle.resDiscount}>Giảm {Discount}</Text>
            </div>
        </Space>
    )
}

export default RestaurantItem   ;