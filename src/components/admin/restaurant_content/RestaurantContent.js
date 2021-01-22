import React, { useEffect } from "react";
import { Input, Typography, Button, Tabs, Divider, Pagination } from "antd";

import MerchantService from "services/MerchantService";
import RestaurantContentStyle from "./style";
import RestaurantItem from "./RestaurantItem";

const RestautantData = [
    {
        Img: "PLCoffeeTea_Small.png",
        Name: "Phúc Long Tea",
        Address: "Tầng 2, LOTTE Mart, 6 Nại Nam, P. Hòa Cường Bắc, Q. Hải Châu, Tp. Đà Nẵng",
        PhoneNumber: "099887766",
        Email: "email@domain.com",
        Time: "Đăng ký 25 ngày trước",
        Status: "Đang chờ"
    },
    {
        Img: "PLCoffeeTea_Small.png",
        Name: "Phúc Long Tea",
        Address: "Tầng 2, LOTTE Mart, 6 Nại Nam, P. Hòa Cường Bắc, Q. Hải Châu, Tp. Đà Nẵng",
        PhoneNumber: "099887766",
        Email: "email@domain.com",
        Time: "Đăng ký 25 ngày trước",
        Status: "Đang chờ"
    },
    {
        Img: "PLCoffeeTea_Small.png",
        Name: "Phúc Long Tea",
        Address: "Tầng 2, LOTTE Mart, 6 Nại Nam, P. Hòa Cường Bắc, Q. Hải Châu, Tp. Đà Nẵng",
        PhoneNumber: "099887766",
        Email: "email@domain.com",
        Time: "Đăng ký 25 ngày trước",
        Status: "Đang chờ"
    },
    {
        Img: "PLCoffeeTea_Small.png",
        Name: "Phúc Long Tea",
        Address: "Tầng 2, LOTTE Mart, 6 Nại Nam, P. Hòa Cường Bắc, Q. Hải Châu, Tp. Đà Nẵng",
        PhoneNumber: "099887766",
        Email: "email@domain.com",
        Time: "Đăng ký 25 ngày trước",
        Status: "Đang chờ"
    },
    {
        Img: "PLCoffeeTea_Small.png",
        Name: "Phúc Long Tea",
        Address: "Tầng 2, LOTTE Mart, 6 Nại Nam, P. Hòa Cường Bắc, Q. Hải Châu, Tp. Đà Nẵng",
        PhoneNumber: "099887766",
        Email: "email@domain.com",
        Time: "Đăng ký 25 ngày trước",
        Status: "Đã xét duyệt"
    },
    {
        Img: "PLCoffeeTea_Small.png",
        Name: "Phúc Long Tea",
        Address: "Tầng 2, LOTTE Mart, 6 Nại Nam, P. Hòa Cường Bắc, Q. Hải Châu, Tp. Đà Nẵng",
        PhoneNumber: "099887766",
        Email: "email@domain.com",
        Time: "Đăng ký 25 ngày trước",
        Status: "Đã xét duyệt"
    },
    {
        Img: "PLCoffeeTea_Small.png",
        Name: "Phúc Long Tea",
        Address: "Tầng 2, LOTTE Mart, 6 Nại Nam, P. Hòa Cường Bắc, Q. Hải Châu, Tp. Đà Nẵng",
        PhoneNumber: "099887766",
        Email: "email@domain.com",
        Time: "Đăng ký 25 ngày trước",
        Status: "Đã xét duyệt"
    },
    {
        Img: "PLCoffeeTea_Small.png",
        Name: "Phúc Long Tea",
        Address: "Tầng 2, LOTTE Mart, 6 Nại Nam, P. Hòa Cường Bắc, Q. Hải Châu, Tp. Đà Nẵng",
        PhoneNumber: "099887766",
        Email: "email@domain.com",
        Time: "Đăng ký 25 ngày trước",
        Status: "Đã xét duyệt"
    }
]

const RestaurantContent = () => {

    const { Title, Text } = Typography;

    const { TabPane } = Tabs;
    
    const GetData = e => {
        const data = [];
        RestautantData.forEach(element => {
            console.log(element);
            if(element.Status===e) {
                data.push(element)
            }
        })
        //console.log(data);
        return (data)
    }

    const handleData = snapshot => {
        snapshot.forEach(item => {
            console.log(item.val());
        })
    }

    useEffect(() => {
        MerchantService.getByStatus('pending').once('value', handleData);

        return () => {
            MerchantService.getByStatus('pending').once('value', handleData);
        }
    }, []);

    return (
        <>
            <div style={RestaurantContentStyle.title}>
                <Title level={4}>Danh sách cửa hàng</Title>
            </div>
            <div style={RestaurantContentStyle.content}>
                <div style={RestaurantContentStyle.search}>
                    <Input allowClear size="large" style={RestaurantContentStyle.searchInput} placeholder="Nhập tên cửa hàng" />
                    <Button size="large" style={RestaurantContentStyle.searchButton}>Tìm kiếm</Button>
                </div>
                <Tabs defaultActiveKey="1" size="large" style={RestaurantContentStyle.tab}>
                    <TabPane tab="Đang chờ" key="1">
                        {GetData("Đang chờ").map(item => {
                            return (
                                <>
                                <RestaurantItem Item={item} />
                                <Divider />
                                </>
                            )
                        })}
                        <Text>Tổng số: <b>1.024</b> cửa hàng đang chờ xét duyệt</Text>
                        <Pagination style={{textAlign: "center"}} showQuickJumper showSizeChanger={false} defaultCurrent={1} total={100} pageSize={5} />
                    </TabPane>
                    <TabPane tab="Đã xét duyệt" key="2">
                        {GetData("Đã xét duyệt").map(item => {
                            return (
                                <>
                                <RestaurantItem Item={item} />
                                <Divider />
                                </>
                            )
                        })}
                        <Text>Tổng số: <b>1.024</b> cửa hàng đang chờ xét duyệt</Text>
                        <Pagination style={{textAlign: "center"}} showQuickJumper showSizeChanger={false} defaultCurrent={1} total={100} pageSize={5} />
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
}

export default RestaurantContent;