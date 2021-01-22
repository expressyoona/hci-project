import React from "react";
import { Card, Col, Row } from "antd";
// import { Pie } from 'react-chartjs-2';
import { BarChartOutlined } from "@ant-design/icons";

const Summary = () => {

    const data = {
        labels: [
            'Hồng trà vải',
            'Khoai tây chiên',
            'Nem chua rán',
            'Khác'
        ],
        datasets: [{
            data: [70, 15, 9, 6],
            backgroundColor: [
                '#03BD5B',
                '#D0021B',
                '#F5A623',
                '#50E3C2'
            ],
            hoverBackgroundColor: [
                '#03BD5B',
                '#D0021B',
                '#F5A623',
                '#50E3C2'
            ]
        }]
    }

    const OrderSummary = ({ title, count}) => {
        return (
            <Card style={{border: '1px solid #AAAAAA', borderRadius: 4}}>
                <h1 color="#636C71">{title}</h1>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <BarChartOutlined style={{fontSize: 28, color: '#FF0000'}} />
                    <b>{count}</b>
                </div>
            </Card>
        )
    }

    return (
        <Row gutter={40}>
            <Col span={6}>
                <OrderSummary title="Tổng đơn hàng đã nhận" count={100} />
            </Col>
            <Col span={6}>
                <OrderSummary title="Tổng đơn hàng đã giao" count={100} />
            </Col>
            <Col span={6}>
                <OrderSummary title="Tổng đơn hàng đã bị hủy" count={20} />
            </Col>
            <Col span={6}>
                <OrderSummary title="Tổng số khuyến mãi" count={4} />
            </Col>
            
            <Col span={12}>
                <Row>
                    <Col span={12}>Doanh thu hôm nay</Col>
                    <Col span={12}>
                        {/* <Pie data={data} width={150} height={150} options={{ maintainAspectRatio: false }} /> */}
                    </Col>
                </Row>
            </Col>
            <Col span={12}>12</Col>
        </Row>
    )

}

export default Summary;