import React, { useState } from "react";
import { Breadcrumb, Table, Input, Button, Space, Tag } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import OrderContentStyle from "./style";

const data = [
    {
        key: 1,
        orderID: "1001",
        orderUser: "Lê Quang Duật 2",
        restaurantName: "Starbucks",
        shipperName: "Trịnh Văn Khánh",
        userAddress: "163 Hà Huy Tập, Quận Thanh Khê, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "12:00 05/10/2020",
        shipTime: "12:2005/10/2020",
        orderStatus: "Đã giao",
        deliveryMoney: "100.000",
        discountMoney: "10.000",
        totalMoney: "90.000"
    },
    {
        key: 2,
        orderID: "1002",
        orderUser: "Nguyễn Bảo Minh Hoàng",
        restaurantName: "Gongcha",
        shipperName: "Trần Viết Thành",
        userAddress: "491 Hải Phòng, Quận Thanh Khê, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "7:50 05/10/2020",
        shipTime: "8:00 05/10/2020",
        orderStatus: "Chưa giao",
        deliveryMoney: "50.000",
        discountMoney: "0",
        totalMoney: "50.000"
    },
    {
        key: 3,
        orderID: "1003",
        orderUser: "Nguyễn Quốc Việt",
        restaurantName: "Phúc Long Coffe & Tea",
        shipperName: "Phan Đức Mạnh",
        userAddress: "41 Tiểu La, P. Hòa Cường Bắc, Quận Hải Châu, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "10:20 05/10/2020",
        shipTime: "11:00 05/10/2020",
        orderStatus: "Đã huỷ",
        deliveryMoney: "125.000",
        discountMoney: "5.000",
        totalMoney: "120.000"
    },
    {
        key: 4,
        orderID: "1001",
        orderUser: "Lê Quang Duật 2",
        restaurantName: "Starbucks",
        shipperName: "Trịnh Văn Khánh",
        userAddress: "163 Hà Huy Tập, Quận Thanh Khê, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "12:00 05/10/2020",
        shipTime: "12:2005/10/2020",
        orderStatus: "Đã giao",
        deliveryMoney: "100.000",
        discountMoney: "10.000",
        totalMoney: "90.000"
    },
    {
        key: 5,
        orderID: "1002",
        orderUser: "Nguyễn Bảo Minh Hoàng",
        restaurantName: "Gongcha",
        shipperName: "Trần Viết Thành",
        userAddress: "491 Hải Phòng, Quận Thanh Khê, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "7:50 05/10/2020",
        shipTime: "8:00 05/10/2020",
        orderStatus: "Chưa giao",
        deliveryMoney: "50.000",
        discountMoney: "0",
        totalMoney: "50.000"
    },
    {
        key: 6,
        orderID: "1003",
        orderUser: "Nguyễn Quốc Việt",
        restaurantName: "Phúc Long Coffe & Tea",
        shipperName: "Phan Đức Mạnh",
        userAddress: "41 Tiểu La, P. Hòa Cường Bắc, Quận Hải Châu, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "10:20 05/10/2020",
        shipTime: "11:00 05/10/2020",
        orderStatus: "Đã huỷ",
        deliveryMoney: "125.000",
        discountMoney: "5.000",
        totalMoney: "120.000"
    },
    {
        key: 7,
        orderID: "1001",
        orderUser: "Lê Quang Duật 2",
        restaurantName: "Starbucks",
        shipperName: "Trịnh Văn Khánh",
        userAddress: "163 Hà Huy Tập, Quận Thanh Khê, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "12:00 05/10/2020",
        shipTime: "12:2005/10/2020",
        orderStatus: "Đã giao",
        deliveryMoney: "100.000",
        discountMoney: "10.000",
        totalMoney: "90.000"
    },
    {
        key: 7,
        orderID: "1002",
        orderUser: "Nguyễn Bảo Minh Hoàng",
        restaurantName: "Gongcha",
        shipperName: "Trần Viết Thành",
        userAddress: "491 Hải Phòng, Quận Thanh Khê, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "7:50 05/10/2020",
        shipTime: "8:00 05/10/2020",
        orderStatus: "Chưa giao",
        deliveryMoney: "50.000",
        discountMoney: "0",
        totalMoney: "50.000"
    },
    {
        key: 8,
        orderID: "1003",
        orderUser: "Nguyễn Quốc Việt",
        restaurantName: "Phúc Long Coffe & Tea",
        shipperName: "Phan Đức Mạnh",
        userAddress: "41 Tiểu La, P. Hòa Cường Bắc, Quận Hải Châu, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "10:20 05/10/2020",
        shipTime: "11:00 05/10/2020",
        orderStatus: "Đã huỷ",
        deliveryMoney: "125.000",
        discountMoney: "5.000",
        totalMoney: "120.000"
    },
    {
        key: 9,
        orderID: "1001",
        orderUser: "Lê Quang Duật 2",
        restaurantName: "Starbucks",
        shipperName: "Trịnh Văn Khánh",
        userAddress: "163 Hà Huy Tập, Quận Thanh Khê, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "12:00 05/10/2020",
        shipTime: "12:2005/10/2020",
        orderStatus: "Đã giao",
        deliveryMoney: "100.000",
        discountMoney: "10.000",
        totalMoney: "90.000"
    },
    {
        key: 10,
        orderID: "1002",
        orderUser: "Nguyễn Bảo Minh Hoàng",
        restaurantName: "Gongcha",
        shipperName: "Trần Viết Thành",
        userAddress: "491 Hải Phòng, Quận Thanh Khê, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "7:50 05/10/2020",
        shipTime: "8:00 05/10/2020",
        orderStatus: "Chưa giao",
        deliveryMoney: "50.000",
        discountMoney: "0",
        totalMoney: "50.000"
    },
    {
        key: 11,
        orderID: "1003",
        orderUser: "Nguyễn Quốc Việt",
        restaurantName: "Phúc Long Coffe & Tea",
        shipperName: "Phan Đức Mạnh",
        userAddress: "41 Tiểu La, P. Hòa Cường Bắc, Quận Hải Châu, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "10:20 05/10/2020",
        shipTime: "11:00 05/10/2020",
        orderStatus: "Đã huỷ",
        deliveryMoney: "125.000",
        discountMoney: "5.000",
        totalMoney: "120.000"
    },
    {
        key: 12,
        orderID: "1001",
        orderUser: "Lê Quang Duật 2",
        restaurantName: "Starbucks",
        shipperName: "Trịnh Văn Khánh",
        userAddress: "163 Hà Huy Tập, Quận Thanh Khê, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "12:00 05/10/2020",
        shipTime: "12:2005/10/2020",
        orderStatus: "Đã giao",
        deliveryMoney: "100.000",
        discountMoney: "10.000",
        totalMoney: "90.000"
    },
    {
        key: 13,
        orderID: "1002",
        orderUser: "Nguyễn Bảo Minh Hoàng",
        restaurantName: "Gongcha",
        shipperName: "Trần Viết Thành",
        userAddress: "491 Hải Phòng, Quận Thanh Khê, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "7:50 05/10/2020",
        shipTime: "8:00 05/10/2020",
        orderStatus: "Chưa giao",
        deliveryMoney: "50.000",
        discountMoney: "0",
        totalMoney: "50.000"
    },
    {
        key: 14,
        orderID: "1003",
        orderUser: "Nguyễn Quốc Việt",
        restaurantName: "Phúc Long Coffe & Tea",
        shipperName: "Phan Đức Mạnh",
        userAddress: "41 Tiểu La, P. Hòa Cường Bắc, Quận Hải Châu, Đà Nẵng",
        city: "Đà Nẵng",
        orderTime: "10:20 05/10/2020",
        shipTime: "11:00 05/10/2020",
        orderStatus: "Đã huỷ",
        deliveryMoney: "125.000",
        discountMoney: "5.000",
        totalMoney: "120.000"
    },
]

const OrderContent = () => {

    const [state, setState] = useState({});

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                // setTimeout(() => searchInput.select(), 100);
            }
        },
        render: text =>
            state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };
    
    const handleReset = clearFilters => {
        clearFilters();
        setState({ searchText: '' });
    };

    const columns = [
        {
            title: "Mã đơn hàng",
            dataIndex: "orderID",
            className: "tableOrderContentStyle",  
            ...getColumnSearchProps('orderID'), 
        },
        {
            title: "Người đặt",
            dataIndex: "orderUser",
            className: "tableOrderContentStyle",  
            ...getColumnSearchProps('orderUser'), 
        },
        {
            title: "Tên quán",
            dataIndex: "restaurantName",
            className: "tableOrderContentStyle",  
            ...getColumnSearchProps('restaurantName'), 
        },
        {
            title: "Tên người giao hàng",
            dataIndex: "shipperName",
            className: "tableOrderContentStyle",  
            ...getColumnSearchProps('shipperName'), 
        },
        {
            title: "Địa chỉ khách hàng",
            dataIndex: "userAddress",
            className: "tableOrderContentStyle",  
            ...getColumnSearchProps('userAddress'), 
        },
        {
            title: "Thành phố",
            dataIndex: "city",
            className: "tableOrderContentStyle",  
            ...getColumnSearchProps('city'), 
        },
        {
            title: "Thời gian đặt",
            dataIndex: "orderTime",
            className: "tableOrderContentStyle",  
            ...getColumnSearchProps('orderTime'), 
        },
        {
            title: "Thời gian giao dự kiến",
            dataIndex: "shipTime",
            className: "tableOrderContentStyle",  
            ...getColumnSearchProps('shipTime'), 
        },
        {
            title: "Trạng thái",
            key: "orderStatus",
            dataIndex: "orderStatus",
            render: (orderStatus) => {
                const color = (orderStatus === "Đã giao") ? "success" : (orderStatus === "Chưa giao") ? "processing" : "error";
                // console.log(color);
                return (
                    <Tag color={color}>
                        {orderStatus.toUpperCase()}
                    </Tag>
                );
            },
            className: "tableOrderContentStyle",
        },
        {
            title: "Tiền giao hàng",
            dataIndex: "deliveryMoney",
            className: "tableOrderContentStyle",  
            ...getColumnSearchProps('deliveryMoney'), 
        },
        {
            title: "Tiền giảm giá",
            dataIndex: "discountMoney",
            className: "tableOrderContentStyle",  
            ...getColumnSearchProps('discountMoney'), 
        },
        {
            title: "Tổng tiền",
            dataIndex: "totalMoney",
            className: "tableOrderContentStyle",  
            ...getColumnSearchProps('totalMoney'), 
        },
    ];

    return (
        <div style={OrderContentStyle.root}>
            <Breadcrumb>
                <Breadcrumb.Item href="user">Người dùng</Breadcrumb.Item>
                <Breadcrumb.Item href="" style={OrderContentStyle.breadcrumb}>Thông tin</Breadcrumb.Item>
            </Breadcrumb>
            <Table style={OrderContentStyle.table} bordered={true} dataSource={data} columns={columns} size="small" pagination={{position: ['bottomCenter']}} />
        </div>
    )
}

export default OrderContent;