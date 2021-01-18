import React from "react";
import { Rate, Space, Progress } from "antd";

import RateCount from "./RateCount";
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
                {Array.from({ length: 5 }).map((item, index) => {
                        return <RateCount count={5 - index} />
                    }
                )}
            </div>
        </Space>
        </>
    )
}

export default ReviewPoint;