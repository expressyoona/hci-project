import React from "react";
import { Card, Avatar, Space, Rate, Typography, Button } from "antd";
import { HeartFilled } from "@ant-design/icons";
import RestaurantStyle from "./style";

const TopReviewItem = ({ Item }) => {
    
    const {Img, Name, Time, Star, Title, Content, Like} = Item;

    const { Text } = Typography;
    const { Meta } = Card;

    return (
        <Space direction="vertical">
            <Meta 
                avatar={<Avatar src={Img} />}
                title={Name}
                description={Time}
            />
            <Rate allowHalf disabled defaultValue={Star} />
            <Text style={RestaurantStyle.toprevTitle}>{Title}</Text>
            <Text style={RestaurantStyle.toprevContent}>{Content}</Text>
            <Button 
                style={RestaurantStyle.toprevLike} 
                icon={<HeartFilled />}
                // loading={loading[1]}
                // onClick={() => }
            >{Like}
            </Button>
        </Space>
    )
}

export default TopReviewItem;