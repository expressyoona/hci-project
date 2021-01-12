import React from "react";
import { Rate, Space, Progress } from "antd";

import RestaurantStyle from "./style";

const ReviewPoint = () => {
    return (
        <>
        <Space style={RestaurantStyle.revp}>
            <div>
                <p style={RestaurantStyle.revpCount}>18 đánh giá</p>
                <p style={RestaurantStyle.revpPoint}>4.9</p>
                <Rate allowHalf disabled defaultValue={5} />
            </div>
            <div style={{display: "grid", borderLeft: "1px solid #000", padding: "0 20px"}}>
                <Rate allowHalf disabled defaultValue={5} />
                <Rate allowHalf disabled defaultValue={4} />
                <Rate allowHalf disabled defaultValue={3} />
                <Rate allowHalf disabled defaultValue={2} />
                <Rate allowHalf disabled defaultValue={1} />
            </div>
            <div>
                <Progress percent={70} size="small" />
                <Progress percent={70} size="small" />
                <Progress percent={70} size="small" />
                <Progress percent={70} size="small" />
                <Progress percent={70} size="small" />
            </div>
        </Space>
        </>
    )
}

export default ReviewPoint;