import React from "react";
import { Button, Divider, Layout, Card, Col, Row, Typography, DatePicker } from "antd";
// import { Pie } from 'react-chartjs-2';
import { ArrowDownOutlined, ArrowUpOutlined, BarChartOutlined } from "@ant-design/icons";
import { Area, Pie } from '@ant-design/charts';

import MerchantSider from "./MerchantSider";
import MerchantHeader from "./MerchantHeader";

import "./style.css";

const RestaurantSummary = () => {

    const { Content } = Layout;
    const { RangePicker } = DatePicker;

    const data = [
        { name: 'Hồng Trà Vải', value: 70 },
        { name: 'Khoai tây chiên', value: 15 },
        { name: 'Nem chua rán', value: 9 },
        { name: 'Khác', value: 6 },
    ]

    const yearRevenueData = [
        { month: 'Jan', value: 34 },
        { month: 'Feb', value: 35 },
        { month: 'Mar', value: 64 },
        { month: 'Apr', value: 43 },
        { month: 'May', value: 95 },
        { month: 'Jun', value: 23 },
        { month: 'Jul', value: 64 },
        { month: 'Aug', value: 43 },
        { month: 'Sep', value: 73 },
        { month: 'Oct', value: 38 },
        { month: 'Nov', value: 58 },
        { month: 'Dec', value: 49 }
    ];

    const dailyRevenueData = [
        { day: 'Mon', value: 7 },
        { day: 'Tue', value: 8 },
        { day: 'Wed', value: 4 },
        { day: 'Thu', value: 8 },
        { day: 'Fri', value: 7 },
        { day: 'Sat', value: 6 },
        { day: 'Sun', value: 10 }
    ];

    const reviewList = [
        { name: 'Nguyễn Văn A', content: 'Trà đào ngon quá' },
        { name: 'Huỳnh Thị Lập Lòe', content: 'Khoai tây chiên tệ quá' },
        { name: 'Anh Hùng Bàn Phím', content: 'Sẽ ủng hộ lần sau' },
        { name: 'Tôi dại dột', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
    ]

    const OrderSummary = ({ title, count, color}) => {
        return (
            <Card style={{border: '1px solid #AAAAAA', borderRadius: 4}} title={title}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <BarChartOutlined style={{fontSize: 28, color: color}} />
                    <b>{count}</b>
                </div>
            </Card>
        )
    }

    const ReviewerName = ({ name }) => (
        <Typography.Text style={{color: 'white', fontWeight: 'bold'}}>
            {name}
        </Typography.Text>
    )

    return (
        <Layout>
            <MerchantSider />
            <Layout>
                <MerchantHeader />
                <Content style={{marginLeft: 320, marginTop: 82}}>
                    <Row gutter={[10, 14]}>
                        <Col span={6}>
                            <OrderSummary title="Tổng đơn hàng đã nhận" color="#9AFF00" count={100} />
                        </Col>
                        <Col span={6}>
                            <OrderSummary title="Tổng đơn hàng đã giao" color="#FF0000" count={100} />
                        </Col>
                        <Col span={6}>
                            <OrderSummary title="Tổng đơn hàng đã bị hủy" color="#FBBC05" count={20} />
                        </Col>
                        <Col span={6}>
                            <OrderSummary title="Tổng số khuyến mãi" color="#232AC9" count={4} />
                        </Col>
                    </Row>
                    <Row gutter={[10, 14]} style={{alignItems: 'stretch'}}>
                        <Col span={6}>
                            <Card
                                title="Doanh thu hôm nay"
                                style={{border: '1px solid #AAAAAA', borderRadius: 4, height: '100%'}}
                            >
                                <Typography.Text>
                                    Tổng đơn hàng
                                    <Typography.Text>
                                        30
                                    </Typography.Text>
                                </Typography.Text>
                                <Divider />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                title="Tỉ lệ món được chọn"
                                style={{border: '1px solid #AAAAAA', borderRadius: 4, height: '100%'}}
                            >
                                <Pie
                                    data={data}
                                    width={170}
                                    height={170}
                                    angleField="value"
                                    colorField="name"
                                    radius="0.9"
                                    label={{type: 'inner', offset: "-30%", content: _ref => {
                                        const percent = _ref.percent;
                                        return ''.concat(percent * 100, '%');
                                    }}}
                                    interactions={[{ type: 'element-active'}]}
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                title="Doanh thu theo tháng trong năm"
                                style={{border: '1px solid #AAAAAA', borderRadius: 4, height: '100%'}}
                            >
                                <Area
                                    data={yearRevenueData}
                                    xField="month"
                                    yField="value"
                                    smooth={true}
                                />
                                <Typography.Text>
                                    Tổng
                                </Typography.Text>
                                <Typography.Title style={{fontSize: 24}}>
                                    60.000.000 VNĐ
                                </Typography.Title>
                                <div style={{color: "#ff0000"}}>
                                <ArrowDownOutlined /> 5,00%
                                </div>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                title="Doanh thu trong ngày theo tuần"
                                style={{border: '1px solid #AAAAAA', borderRadius: 4, height: '100%'}}
                            >
                                <RangePicker picker="week" />
                                <Area
                                    data={dailyRevenueData}
                                    xField="day"
                                    yField="value"
                                    smooth={true}
                                />
                                
                                <Typography.Text>
                                    Tổng
                                </Typography.Text>
                                <Typography.Title style={{fontSize: 24}}>
                                    12.345.000 VNĐ
                                </Typography.Title>
                                <div style={{color: "#4AAF05"}}>
                                    <ArrowUpOutlined /> 5,00%
                                </div>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card style={{display: 'flex', flexDirection: 'column', border: '1px solid #AAAAAA', borderRadius: 4}} title="Đánh giá trong ngày">
                                {reviewList.map(item => (
                                    <Card
                                        bordered
                                        title={<ReviewerName name={item.name} />}
                                        style={{margin: '16px 32px 0px', borderWidth: 2, borderRadius: 6}}
                                        headStyle={{background: '#A0CBD9'}}
                                    >                                        
                                        {item.content}
                                    </Card>
                                ))}
                                <Button style={{background: '#00AFE7', height: 54, textAlign: 'center', margin: '16px 32px 0px', fontWeight: 'bold', color: 'white'}}>XEM THÊM</Button>
                            </Card>
                        </Col>
                    </Row>
                    
                </Content>
            </Layout>
        </Layout>
    )

}

export default RestaurantSummary;