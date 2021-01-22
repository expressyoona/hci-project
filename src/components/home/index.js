import React from 'react';
import { Image, Typography, Row, Col } from "antd";
import { useSelector } from "react-redux";


import HomeStyle from "./styles";
import AreYouHungry from './AreYouHungry';
import MerchantRegistrationProcess from "./MerchantRegistrationProcess";
import ShipperRegistration from "./ShipperRegistration";

const Home = () => {

    const { Title } = Typography;

    const auth = useSelector(state => state.user);
    // console.log(auth);

    return (
        <>
            <AreYouHungry />
            <Typography>
                <Title style={HomeStyle.title}>Sử dụng Là Sao như thế nào ?</Title>
                <Title style={{...HomeStyle.title, ...HomeStyle.title2}}>VÔ CÙNG DỄ DÀNG</Title>
            </Typography>
            <Row>
                <Col span={16} offset={4}>
                    <Image preview={false} src="images/home/purchasing-process.png"/>
                </Col>
            </Row>
            <MerchantRegistrationProcess />
            <ShipperRegistration />    
        </>
    )
}

export default Home;