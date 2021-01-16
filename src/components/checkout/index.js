import React from "react";
import { Row, Col, Breadcrumb, Image, Typography, Radio, Button } from "antd";
import { EnvironmentTwoTone } from "@ant-design/icons";

import CheckOutStyle from "./style.js";
import '../cart/tableStyle.css'

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

const CheckOut = () => {

    const { Text } = Typography; 

    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Row>
            <Col span={16} offset={4}>
                <Breadcrumb>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item href="" style={CheckOutStyle.breadcrumb}>Thanh toán</Breadcrumb.Item>
                </Breadcrumb>
                <div style={CheckOutStyle.address}>
                    <div style={{display: "inline-flex"}}>
                        <EnvironmentTwoTone style={{fontSize: "24px"}} twoToneColor="#7FAD39" />
                        <p style={CheckOutStyle.addressTitle}>Địa chỉ nhận hàng</p>
                    </div>  
                    <div style={CheckOutStyle.addressInfo}>
                        <div style={CheckOutStyle.nameText}>
                            <Text>Lê Quang Duật</Text><br/>
                            <Text>(+84) 357898469</Text>
                        </div>
                        <Text style={CheckOutStyle.addressText}>Kí túc xá khu V của Trường Đại học Công nghệ thông tin và truyền thông Việt - Hàn, đường Trần Đại Nghĩa, Phường Hòa Quý, Quận Ngũ Hành Sơn, Đà Nẵng</Text>
                        <Text style={CheckOutStyle.changeText}>Thay đổi</Text>
                    </div>
                </div>
                <table>
                    <thead>
                        <th>Sản phẩm</th>
                        <th>Cửa hàng</th>
                        <th>Giá tiền</th>
                        <th style={{textAlign: "center"}}>Số lượng</th>
                        <th>Thành tiền</th>
                    </thead>
                    {data.map(item => {
                        return (
                            <>
                            <tr>
                                <td>
                                    <Image width="100px" height="100px" src={"images/restaurant/menu/" + item.foodImg} preview={false} ></Image>
                                    <Text style={CheckOutStyle.foodName}>{item.foodName}</Text>
                                </td>
                                <td>{item.restaurantName}</td>
                                <td style={CheckOutStyle.price}>{item.price}</td>
                                <td style={CheckOutStyle.numberOrder}>{item.numberOrder}</td>
                                <td style={CheckOutStyle.price}>{item.total}</td>
                            </tr>
                            </>
                        )
                    })}
                </table>
                <div style={CheckOutStyle.messAndDiscount}>
                    <div style={CheckOutStyle.mess}>
                        <p style={CheckOutStyle.messTitle}>Lời nhắn:</p>
                        <input style={CheckOutStyle.messInput} placeholder="Lưu ý cho người bán" />
                    </div>
                    <div style={CheckOutStyle.discount}>
                        <p style={CheckOutStyle.messTitle}>Mã giảm giá:</p>
                        <div>
                            <p style={CheckOutStyle.discountCode}>Mã: KHJHFJE5</p>
                            <p style={CheckOutStyle.discountChange}>Thay đổi</p>
                        </div>
                        <p style={CheckOutStyle.discountCode}>Giảm 30.000 VND giá trị đơn hàng</p>
                    </div>
                </div>
                <div style={CheckOutStyle.payment}>
                    <div style={CheckOutStyle.method}>
                        <p style={CheckOutStyle.messTitle}>Phương thức thanh toán <span style={{color: "#FF0000"}}>*</span></p>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio style={CheckOutStyle.radioStyle} value={1}>
                                Thanh toán khi nhận hàng
                            </Radio>
                            <Radio style={CheckOutStyle.radioStyle} value={2}>
                                Thanh toán qua Internet Banking
                            </Radio>
                        </Radio.Group>
                    </div>
                    <div style={CheckOutStyle.billForm}>
                        <p style={CheckOutStyle.billTitle}>Thanh toán</p>
                        <div>
                            <p style={CheckOutStyle.billText}>Tạm tính</p>
                            <p style={CheckOutStyle.amountText}>80.000 VND</p>
                        </div>
                        <div>
                            <p style={CheckOutStyle.billText}>Phí vận chuyển (3km)</p>
                            <p style={CheckOutStyle.amountText}>30.000 VND</p>
                        </div>
                        <div>
                            <p style={CheckOutStyle.billText}>Giảm giá</p>
                            <p style={CheckOutStyle.amountText}>-30.000 VND</p>
                        </div>
                        <div style={CheckOutStyle.bd}>
                            <p style={CheckOutStyle.billText}>Tổng đơn hàng</p>
                            <p style={CheckOutStyle.amountText}>80.000 VND</p>
                        </div>
                        <Button style={CheckOutStyle.checkoutButton}>Tiến hành thanh toán</Button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default CheckOut;