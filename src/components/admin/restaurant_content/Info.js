import React from "react";
import { Image, Typography, Tag, Button, Tabs } from "antd";
import { CheckOutlined, CloseCircleOutlined } from "@ant-design/icons";

import RestaurantContentStyle from "./style";
// import RateSummary from "restaurant/RateSummary";
import RateSummary from "components/restaurant/RateSummary";

const Info = ({Item}) => {

    const { Img, Name, Address, Representater, PhoneNumber, Email, Cuisine, Status, Time } = Item;

    const { RestaurantInfoStyle } = RestaurantContentStyle;

    const { Title, Text } = Typography;

    const { TabPane } = Tabs;

    if (Status === "Đang chờ") {
        return (
            <div style={RestaurantInfoStyle.info}>
                <Image style={RestaurantInfoStyle.infoImg} preview={false} src={"images/restaurant/" + Img} />
                <div style={{marginLeft: 70, position: "relative"}}>
                    <table style={RestaurantInfoStyle.table}>
                        <tr style={RestaurantInfoStyle.tr}>
                            <td style={RestaurantInfoStyle.td}><Title style={RestaurantInfoStyle.infoTitle}>{Name}</Title></td>
                            <td style={RestaurantInfoStyle.td}><Tag color="gold">{Status}</Tag></td>
                        </tr>
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
                    <Button size="large" style={{...RestaurantInfoStyle.button, ...RestaurantInfoStyle.acceptButton}} icon={<CheckOutlined />}>Chấp nhận</Button>
                    <Button size="large" style={{...RestaurantInfoStyle.button, ...RestaurantInfoStyle.declineButton}} icon={<CloseCircleOutlined />}>Từ chối</Button>
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
                <Image style={RestaurantInfoStyle.infoImg} preview={false} src={"images/restaurant/" + Img} />
                <div style={{marginLeft: 70, position: "relative"}}>
                    <tr style={RestaurantInfoStyle.tr}>
                        <td style={RestaurantInfoStyle.td}><Title style={RestaurantInfoStyle.infoTitle}>{Name}</Title></td>
                        <td style={RestaurantInfoStyle.td}><Tag color="green">{Status}</Tag></td>
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