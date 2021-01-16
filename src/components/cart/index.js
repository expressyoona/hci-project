import React from "react";
import { Breadcrumb, Row, Col, Image, Typography, InputNumber, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import CartStyle from "./style";
import './tableStyle.css'

const data = [
    {
        foodName: 'Khoai tây chiên',
        foodImg: 'KhoaiTayChien.png',
        restaurantName: 'PL Coffee & Tea',
        price: '20.000 VNĐ',
        numberOrder: '1',
        total: '20.000 VNĐ'
    },
    {
        foodName: 'Xúc xích chiên',
        foodImg: 'XucXichChien.png',
        restaurantName: 'PL Coffee & Tea',
        price: '20.000 VNĐ',
        numberOrder: '2',
        total: '40.000 VNĐ'
    },
    {
        foodName: 'Nem Chua Rán',
        foodImg: 'NemChuaRan.png',
        restaurantName: 'PL Coffee & Tea',
        price: '20.000 VNĐ',
        numberOrder: '1',
        total: '20.000 VNĐ'
    },
]

const Cart = () => {

    const { Text } = Typography;

    return (
        <Row style={{padding: "0 0 15px 15px"}}>
            <Col span={16} offset={4}>
                <Breadcrumb>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item href="" style={CartStyle.breadcrumb}>Giỏ hàng</Breadcrumb.Item>
                </Breadcrumb>
                <table>
                    <thead>
                        <th>Sản phẩm</th>
                        <th>Cửa hàng</th>
                        <th>Giá tiền</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </thead>
                    {data.map(item => {
                        return (
                            <>
                            <tr>
                                <td>
                                    <Image width="100px" height="100px" src={"images/restaurant/menu/" + item.foodImg} preview={false} ></Image>
                                    <Text style={CartStyle.foodName}>{item.foodName}</Text>
                                </td>
                                <td>{item.restaurantName}</td>
                                <td style={CartStyle.price}>{item.price}</td>
                                <td><InputNumber size="large" min={1} max={20} defaultValue={item.numberOrder} /></td>
                                <td style={CartStyle.price}>{item.total}</td>
                                <td style={CartStyle.cursor}><CloseOutlined /></td>
                            </tr>
                            </>
                        )
                    })}
                </table>
                <Button style={CartStyle.tableButton}>Tiếp tục mua hàng</Button>
                <Button style={{...CartStyle.tableButton, ...CartStyle.refreshButton}}>Cập nhật giỏ hàng</Button>
                <div style={CartStyle.bill}>
                    <div style={{display: "inline-grid"}}>
                        <Text style={CartStyle.discountText}>Nhập mã giảm giá</Text>
                        <div style={{display: "inline-flex"}}>
                            <input style={CartStyle.discountInput} placeholder="Nhập mã của bạn vào đây" />
                            <Button style={{...CartStyle.billButton, ...CartStyle.discountButton}}>Xác nhận</Button>
                        </div>
                    </div>
                    <div style={CartStyle.billForm}>
                        <p style={CartStyle.billTitle}>Thanh toán</p>
                        <div>
                            <p style={CartStyle.billText}>Tạm tính</p>
                            <p style={CartStyle.amountText}>80.000 VND</p>
                        </div>
                        <div>
                            <p style={CartStyle.billText}>Giảm giá</p>
                            <p style={CartStyle.amountText}>-30.000 VND</p>
                        </div>
                        <div style={CartStyle.bd}>
                            <p style={CartStyle.billText}>Tổng đơn hàng</p>
                            <p style={CartStyle.amountText}>50.000 VND</p>
                        </div>
                        <Button style={{...CartStyle.billButton, ...CartStyle.checkoutButton}}>Tiến hành thanh toán</Button>
                    </div>
                </div>
            </Col>    
        </Row>
    )
}

export default Cart;