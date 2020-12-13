import { React } from "react";
import { Image, Space, Typography } from "antd";

import HomeStyle from "./styles";

const Dish = ({Name, TotalAddress, Img}) => {

    const { Text } = Typography;

    return (
        <Space direction="vertical" size={5} style={HomeStyle.dish}>
            <Image src={Img} style={HomeStyle.dishImage}></Image>
            <Text style={HomeStyle.dishName}>{Name}</Text>
            <Text style={HomeStyle.dishTotalAddress}>{TotalAddress} địa chỉ</Text>
        </Space>
    )
}

export default Dish;