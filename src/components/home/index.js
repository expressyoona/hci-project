import React from 'react';
import { Button, Image, Typography, Row, Col } from "antd";

import style from "./styles";

const Home = () => {

    const { Title, Paragraph } = Typography;

    return (
        <>
            <Typography>
                <Title>BẠN ĐANG ĐÓI ?</Title>
                <Title>ĐÂY LÀ MỘT SỐ LỰA CHỌN DÀNH CHO BẠN</Title>
            </Typography>
            <Row>
            { Array.from({ length: 12}).map((item, index) => {
                return (
                <Col key={index} span={6}>
                    <Image src="images/food-type/drink.png" />
                </Col>)
            })}
            </Row>
            
            <Typography>
                <Title>Sử dụng ... như thế nào ?</Title>
                <Paragraph style={style.primaryText}>VÔ CÙNG DỄ DÀNG</Paragraph>
            </Typography>
            <Row justify="center">
                <Col span={8}>
                    <Image src="images/home/guide_customer_1.png" />
                    <Title>Nhập vị trí của bạn</Title>
                    <Paragraph>Chọn thành phố để hiển thị danh sách nhà hàng</Paragraph>
                </Col>
                <Col span={8}>
                    <Image src="images/home/guide_customer_2.png" />
                    <Title>Chọn nhà hàng và món ăn</Title>
                    <Paragraph>Bạn muốn ăn gì? Chọn món từ nhiều nhà hàng khác nhau</Paragraph>
                </Col>
                <Col span={8}>
                    <Image src="images/home/guide_customer_3.png" />
                    <Title>Thanh toán và giao hàng tận nơi</Title>
                    <Paragraph>Thanh toán bằng tiền mặt hay thẻ tín dụng</Paragraph>
                </Col>
            </Row>
            <Title>Trở thành đối tác</Title>
            <Title>Quy trình đăng ký</Title>
            <Row justify="center">
                <Col span={4}>
                    <Image src="images/home/guide_merchant_step_1.png" />
                    <Title style={style.merchantStepTitle}>Bước 1: ĐĂNG KÝ THÔNG TIN QUA WEBSITE</Title>
                    <Paragraph>Điền thông tin của cửa hàng qua đường link : https:// hoanglanton.com</Paragraph>
                </Col>
                <Col span={4}>
                    <Image src="images/home/guide_merchant_step_2.png" />
                    <Title style={style.merchantStepTitle}>Bước 2: ĐĂNG KÝ THÔNG TIN QUA WEBSITE</Title>
                    <Paragraph>Kiểm tra email từ ..... có tiêu đề: “Đăng ký để trở thành đối tác nhà hàng của ....”
Truy cập vào đường dẫn và nhập mã truy cập, hướng dẫn trong mail.</Paragraph>
                </Col>
                <Col span={4}>
                    <Image src="images/home/guide_merchant_step_3.png" />
                    <Title style={style.merchantStepTitle}>Bước 3: ĐĂNG KÝ THÔNG TIN QUA WEBSITE</Title>
                    <Paragraph>Đối tác nhận và ký hợp đồng.Gửi lại hợp đồng theo hướng dẫn</Paragraph>
                </Col>
                <Col span={4}>
                    <Image src="images/home/guide_merchant_step_4.png" />
                    <Title style={style.merchantStepTitle}>Bước 4: ĐĂNG KÝ THÔNG TIN QUA WEBSITE</Title>
                    <Paragraph>Thông báo đăng ký thành công.
Thông báo chính thức trở thành đối tác.</Paragraph>
                </Col>
                <Col span={4}>
                    <Image src="images/home/guide_merchant_step_5.png" />
                    <Title style={style.merchantStepTitle}>Bước 5: ĐĂNG KÝ THÔNG TIN QUA WEBSITE</Title>
                    <Paragraph></Paragraph>
                </Col>
            </Row>
            <Button>ĐĂNG KÝ NGAY</Button>
            <Title>HỢP TÁC NHÂN VIÊN GIAO NHẬN</Title>
            <Title>SHIPPER</Title>
        </>
    )
}

export default Home;