import React from "react";
import { Rate, Progress } from "antd";

import "./styles.css";

const RatePerStar = ({ count, percent }) => {

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Rate disabled value={count} style={{marginRight: 26}} />
            <Progress style={{width: '150px'}} percent={percent} size="small" strokeColor="gray" format={(precent, successPercent) => 7} />
        </div>
    )

} 

export default RatePerStar;