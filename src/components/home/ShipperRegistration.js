import React from 'react';
import { Row, Col, Typography, Button, Image } from "antd";

import HomeStyle from "./styles";


const ShipperRegistration = () => {
    
    const { Title, Paragraph, Text} = Typography;

    return (
        <>
        <Typography>
            <Title style={HomeStyle.title}>Hợp tác nhân viên giao nhận</Title>
            <Title style={{...HomeStyle.title, ...HomeStyle.title2}}>Shipper</Title>
        </Typography>
        <Row gutter={30}>
            <Col span={12} offset={4}>
                <Text style={HomeStyle.te}>Giúp bạn tăng thu nhập trong thời gian rảnh rỗi</Text>
                <Paragraph style={HomeStyle.para}>Chúng tôi tìm kiếm hợp tác với các cá nhân để thực hiện việc giao hàng, chúng tôi sẽ cung cấp ứng dụng, 1 số dụng cụ cần thiết để bạn có thể tiếp nhận & giao hàng, kiếm thêm thu nhập.
                <br/>Đăng ký tham gia ngay với nút “ĐĂNG KÝ NGAY” phía dưới hoặc gửi Email qua jobs@heheheehehe.vn - hoặc gọi qua số điện thoại 0123456789.</Paragraph>
            </Col>
            <Col span={4}>
                <Image preview={false} src="/images/home/guide_shipper.png" />
            </Col>
        </Row>
        <Row justify="center">
            <Button size="large" type="default" style={HomeStyle.button}>ĐĂNG KÝ NGAY</Button>
        </Row>
        </>
    )
}

export default ShipperRegistration;