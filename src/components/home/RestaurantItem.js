import { React } from "react";
import { Image, Space, Typography } from "antd";
import { Link } from "react-router-dom";

import HomeStyle from "./styles";

const RestaurantItem = ({ data }) => {

    // console.log(data.restaurant);

    // const { address, img, city, restaurantName, slug } = data;

    const { Text } = Typography;

    return (
        <Space direction="vertical" size={5} style={HomeStyle.res}>
            <Link to={`/restaurant/${data && data.slug}`}>
                <Image src={data && data.img ? "images/restaurant/" : "images/restaurant/Starbuck.png"} preview={false} style={HomeStyle.resImage} />
            </Link>
            <Text style={HomeStyle.resName}>
                <Link to={`/restaurant/${data && data.slug}`} style={{color: "#000000"}}>{data && data.restaurantName}</Link>
            </Text>
            <Text style={HomeStyle.resAddress}>{data && data.address}</Text>
            <div style={{backgroundColor: "#d8eef5", textAlign: "center"}}>
                {/* <Text style={HomeStyle.resTime}>{Time}</Text> */}
                {/* <Text style={HomeStyle.resDiscount}>Giảm {Discount}</Text> */}
            </div>
        </Space>
    )
}

export default RestaurantItem   ;