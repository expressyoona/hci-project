import React from "react";
import { Row, Col, Space, Rate } from "antd";

import RestaurantStyle from "./style";
import RatePerStar from "./RatePerStar";

const RateSummary = () => {

    return (
        <Row>
            <Col span={24}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Space style={RestaurantStyle.revp}>
                        <div style={{marginRight: 44, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <p style={RestaurantStyle.revpCount}>18 đánh giá</p>
                            <p style={RestaurantStyle.revpPoint}>4.9</p>
                            <Rate allowHalf disabled defaultValue={5} />
                        </div>
                        <div style={{borderLeft: "1px solid #000", padding: "0 29px"}}>
                            {Array.from({ length: 5 }).map((item, index) => {
                                    return <RatePerStar count={5 - index} percent={70} />
                                }
                            )}
                        </div>
                    </Space>
                </div>
            </Col>
        </Row>
    )
}

export default RateSummary;