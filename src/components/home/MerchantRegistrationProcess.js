import React from 'react';
import { Row, Col, Typography, List, Space, Image, Button } from "antd";

import HomeStyle from "./styles";

const data = [
    {
        "img": "images/home/merchant-registration-process/B1-img.png",
        "text": "images/home/merchant-registration-process/B1-text.png",
        "detail": "images/home/merchant-registration-process/B1-detail.png"
    },
    {
        "img": "images/home/merchant-registration-process/B2-img.png",
        "text": "images/home/merchant-registration-process/B2-text.png",
        "detail": "images/home/merchant-registration-process/B2-detail.png"
    },{
        "img": "images/home/merchant-registration-process/B3-img.png",
        "text": "images/home/merchant-registration-process/B3-text.png",
        "detail": "images/home/merchant-registration-process/B3-detail.png"
    },{
        "img": "images/home/merchant-registration-process/B4-img.png",
        "text": "images/home/merchant-registration-process/B4-text.png",
        "detail": "images/home/merchant-registration-process/B4-detail.png"
    },{
        "img": "images/home/merchant-registration-process/B5-img.png",
        "text": "images/home/merchant-registration-process/B5-text.png",
    }
    
]

const MerchantRegistrationProcess = () => {
    
    const { Title } = Typography;

    return (
        <>
        <Typography>
            <Title style={HomeStyle.title}>Trở thành nhà hàng đối tác</Title>
            <Title style={{...HomeStyle.title, ...HomeStyle.title2}}>QUY TRÌNH ĐĂNG KÝ</Title>
        </Typography>
        <Row>
            <Col span={16} offset={4}>
                <List
                    grid={{
                        gutter: [30, 15],
                        column: 5
                    }}
                    dataSource={data} 
                    renderItem={item => (
                        <List.Item>
                            <Space direction="vertical" size="large">
                                <Image src={item.img} />
                                <Image src={item.text} />
                                <Image src={item.detail} />
                            </Space>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
        <Row justify="center">
            <Button size="large" type="default" style={HomeStyle.button}>ĐĂNG KÝ NGAY</Button>
        </Row>
        </>
    )
}

export default MerchantRegistrationProcess;