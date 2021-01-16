import React from "react";
import { Row, Col, Typography } from "antd";

import RestaurantStyle from "./style";
import ReviewPoint from "./ReviewPoint";

const Review = () => {

    const { Title } = Typography;

    return (
        <Row>
            <Col span={8} offset={8} style={{margin: "auto", width: "50%"}}>
                <Title style={RestaurantStyle.revTitle}>Đánh giá</Title>
                <ReviewPoint />
            </Col>
        </Row>
    )
}

export default Review;