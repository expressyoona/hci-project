import React from "react";
import { Rate, Space, Progress } from "antd";

const RateCount = ({ count, percent }) => {

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Rate allowHalf disabled defaultValue={count} />
            <Progress style={{width: '100px'}} percent={percent} size="small" />
        </div>
    )

} 

export default RateCount;