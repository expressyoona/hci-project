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
            <div style={{borderLeft: "1px solid #000", padding: "0 20px"}}>
                <ul>
                    <li style={{display: "inline-block !important"}}>
                        <Rate allowHalf disabled defaultValue={5} />
                        <Progress percent={70} size="small" />
                    </li>
                    <li style={{display: "inline-block"}}>
                        <Rate allowHalf disabled defaultValue={4} />
                        <Progress percent={70} size="small" />
                    </li>
                    <li style={{display: "inline-block"}}>
                        <Rate allowHalf disabled defaultValue={3} />
                        <Progress percent={70} size="small" />
                    </li>
                    <li style={{display: "inline-block"}}>
                        <Rate allowHalf disabled defaultValue={2} />
                        <Progress percent={70} size="small" />
                    </li>
                    <li style={{display: "inline-block"}}>
                        <Rate allowHalf disabled defaultValue={1} />
                        <Progress percent={70} size="small" />
                    </li>
                </ul>
            </div>
        </Space>
        </>
    )
}

export default ReviewPoint;