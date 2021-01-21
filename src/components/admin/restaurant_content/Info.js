import React, { useState } from "react";
import { Image, Typography, Tag, Button, Tabs, notification, Modal, Radio, Input } from "antd";
import { CheckOutlined, CloseCircleOutlined } from "@ant-design/icons";

import RestaurantContentStyle from "./style";
// import RateSummary from "restaurant/RateSummary";
import RateSummary from "components/restaurant/RateSummary";
import RestaurantStyle from "components/restaurant/style";

const openNotification = () => {
    
};

const Info = ({Item}) => {

    const { Img, Name, Address, Representater, PhoneNumber, Email, Cuisine, Status, Time } = Item;

    const { RestaurantInfoStyle } = RestaurantContentStyle;

    const { Title, Text } = Typography;

    const { TabPane } = Tabs;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const [Accept, setAccept] = useState(false);

    const onClick = e => {
        setAccept(true);
        notification.success({
            message: "Thành công",
            description: "Đã xác nhận cửa hàng này làm đối tác.",
            duration: 10
        });
    }

    if (Accept === false) {
        return (
            <div style={RestaurantInfoStyle.info}>
                <Image style={RestaurantInfoStyle.infoImg} preview={false} src={"http://localhost:3000/images/restaurant/" + Img} />
                <div style={{marginLeft: 70, position: "relative"}}>
                    <table style={RestaurantInfoStyle.table}>
                        <tr style={RestaurantInfoStyle.tr}>
                            <td style={RestaurantInfoStyle.td}><Title style={RestaurantInfoStyle.infoTitle}>{Name}</Title></td>
                            <td style={RestaurantInfoStyle.td}><Tag color="gold">{Status}</Tag></td>
                        </tr>
                        <tr style={RestaurantInfoStyle.tr}>
                            <td style={RestaurantInfoStyle.td}>Địa chỉ</td>
                            <td style={{...RestaurantInfoStyle.td, ...RestaurantStyle.infoAddress}}>{Address}</td>
                        </tr>
                        <tr style={RestaurantInfoStyle.tr}>
                            <td style={RestaurantInfoStyle.td}>Người đại diện</td>
                            <td style={RestaurantInfoStyle.td}>{Representater}</td>
                        </tr>
                        <tr style={RestaurantInfoStyle.tr}>
                            <td style={RestaurantInfoStyle.td}>Số điện thoại/Email</td>
                            <td style={RestaurantInfoStyle.td}>{PhoneNumber}/ {Email}</td>
                        </tr>
                        <tr style={RestaurantInfoStyle.tr}>
                            <td style={RestaurantInfoStyle.td}>Mặt hàng kinh doanh</td>
                            <td style={RestaurantInfoStyle.td}>{Cuisine}</td>
                        </tr>
                    </table>
                    <Button size="large" style={{...RestaurantInfoStyle.button, ...RestaurantInfoStyle.acceptButton}} icon={<CheckOutlined />} onClick={onClick}>Chấp nhận</Button>
                    <Button size="large" style={{...RestaurantInfoStyle.button, ...RestaurantInfoStyle.declineButton}} icon={<CloseCircleOutlined />} onClick={showModal}>Từ chối</Button>
                    <Modal title="Chọn lý do từ chối" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Thông tin không đúng hoặc không hợp lệ</Radio><br/>
                            <Radio value={2}>Đã tồn tại cửa hàng trên hệ thống</Radio><br/>
                            <Radio value={3}>Cửa hàng cùi</Radio><br/>
                            <Radio value={4}>Cửa hàng không đạt yêu cầu</Radio><br/>
                            <Radio value={5}>Khác: <Input style={{ width: 100, marginLeft: 10 }} /></Radio>
                        </Radio.Group>
                    </Modal>
                </div>
                <Text style={RestaurantInfoStyle.time}>{Time}</Text>
                <div style={RestaurantInfoStyle.map}>
                    <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1612.0356319386688!2d108.22120546008962!3d16.060897388770424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ccf84efb0f%3A0x60496251c7e11206!2zMjggxJAuIEzDqiDEkMOsbmggRMawxqFuZywgUGjGsOG7m2MgTmluaCwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1607930627113!5m2!1svi!2s" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </div>
        )
    }
    else {
        return (
            <div style={RestaurantInfoStyle.info}>
                <Image style={RestaurantInfoStyle.infoImg} preview={false} src={"http://localhost:3000/images/restaurant/" + Img} />
                <div style={{marginLeft: 70, position: "relative"}}>
                    <tr style={RestaurantInfoStyle.tr}>
                        <td style={RestaurantInfoStyle.td}><Title style={RestaurantInfoStyle.infoTitle}>{Name}</Title></td>
                        <td style={RestaurantInfoStyle.td}><Tag color="green">Đã xác nhận</Tag></td>
                    </tr>
                    <Tabs defaultActiveKey="1" size="large">
                        <TabPane key="1" tab="Thông tin chung">
                        <table style={RestaurantInfoStyle.table}>
                            <tr style={RestaurantInfoStyle.tr}>
                                <td style={RestaurantInfoStyle.td}>Địa chỉ</td>
                                <td style={RestaurantInfoStyle.td}>{Address}</td>
                            </tr>
                            <tr style={RestaurantInfoStyle.tr}>
                                <td style={RestaurantInfoStyle.td}>Người đại diện</td>
                                <td style={RestaurantInfoStyle.td}>{Representater}</td>
                            </tr>
                            <tr style={RestaurantInfoStyle.tr}>
                                <td style={RestaurantInfoStyle.td}>Số điện thoại/Email</td>
                                <td style={RestaurantInfoStyle.td}>{PhoneNumber}/ {Email}</td>
                            </tr>
                            <tr style={RestaurantInfoStyle.tr}>
                                <td style={RestaurantInfoStyle.td}>Mặt hàng kinh doanh</td>
                                <td style={RestaurantInfoStyle.td}>{Cuisine}</td>
                            </tr>
                        </table>
                        </TabPane>
                        <TabPane key="2" tab="Đánh giá khách hàng">
                            <RateSummary />
                        </TabPane>
                    </Tabs>
                </div>
                <Text style={RestaurantInfoStyle.time}>{Time}</Text>
                <div style={RestaurantInfoStyle.map}>
                    <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1612.0356319386688!2d108.22120546008962!3d16.060897388770424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ccf84efb0f%3A0x60496251c7e11206!2zMjggxJAuIEzDqiDEkMOsbmggRMawxqFuZywgUGjGsOG7m2MgTmluaCwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1607930627113!5m2!1svi!2s" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </div>
        )
    }
}

export default Info;