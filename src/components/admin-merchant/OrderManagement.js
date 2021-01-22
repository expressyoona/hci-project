import React from "react";
import { Input, Layout, Button, Table } from "antd";

import MerchantHeader from "./MerchantHeader";
import MerchantSider from "./MerchantSider";
import { Link } from "react-router-dom";

const OrderTable = () => {

    const { Content } = Layout;

    const data = [
        { key: 1, orderId: '#123', orderStatus: 'Đang chờ', consumerName: 'Minh Hoàng', consumerAddress: 'Ngũ Hành Sơn', orderTime: '22/01/2021 15:56', waitingTime: '15 phút'},
        { key: 2, orderId: '#124', orderStatus: 'Đang chờ', consumerName: 'Minh Hoàng', consumerAddress: 'Ngũ Hành Sơn', orderTime: '22/01/2021 15:56', waitingTime: '15 phút'},
        { key: 3, orderId: '#125', orderStatus: 'Đang chờ', consumerName: 'Minh Hoàng', consumerAddress: 'Ngũ Hành Sơn', orderTime: '22/01/2021 15:56', waitingTime: '15 phút'},
        { key: 4, orderId: '#126', orderStatus: 'Đang chờ', consumerName: 'Minh Hoàng', consumerAddress: 'Ngũ Hành Sơn', orderTime: '22/01/2021 15:56', waitingTime: '15 phút'},
        { key: 5, orderId: '#127', orderStatus: 'Đang chờ', consumerName: 'Minh Hoàng', consumerAddress: 'Ngũ Hành Sơn', orderTime: '22/01/2021 15:56', waitingTime: '15 phút'},
        { key: 6, orderId: '#128', orderStatus: 'Đang chờ', consumerName: 'Minh Hoàng', consumerAddress: 'Ngũ Hành Sơn', orderTime: '22/01/2021 15:56', waitingTime: '15 phút'},
        { key: 7, orderId: '#129', orderStatus: 'Đang chờ', consumerName: 'Minh Hoàng', consumerAddress: 'Ngũ Hành Sơn', orderTime: '22/01/2021 15:56', waitingTime: '15 phút'}
    ]

    const columns = [
        { title: 'Mã đơn hàng', dataIndex: 'orderId', key: 'orderId' },
        { title: 'Trạng thái', dataIndex: 'orderStatus', key: 'orderStatus' },
        { title: 'Người đặt hàng', dataIndex: 'consumerName', key: 'consumerName' },
        { title: 'Địa chỉ', key: 'consumerAddress', dataIndex: 'consumerAddress' },
        { title: 'Thời gian đặt hàng', key: 'orderTime', dataIndex: 'orderTime' },
        { title: 'Thời gian đã chờ', key: 'waitingTime', dataIndex: 'waitingTime' },
        { title: 'Chi tiết', key: 'detail', dataIndex: 'detail', render: () => (
            <Link to="???">Chi tiết</Link>
        )},
        { title: 'Thao tác', key: 'action', render: () => (
            <>
                <Button>Xác nhận</Button>
                <Button>Từ chối</Button>
            </>
        ) }
    ]

    const TableHeader = ({ title }) => {
        return (
            <h1>{title}</h1>
        )
    }

    return (
        <Layout>
            <MerchantSider />
            <Layout>
                <MerchantHeader />
                <Content style={{marginLeft: 320, marginTop: 82}}>
                    <Button>Xem toàn bộ đơn hàng</Button>
                    <Input placeholder="Tìm đơn hàng" />
                    <Table
                        dataSource={data}
                        columns={columns}
                        pagination={{position: ['bottomCenter']}}
                        title={() => <TableHeader title="Đơn mới" />}
                    />
                    <Table
                        dataSource={data}
                        columns={columns}
                        pagination={{position: ['bottomCenter']}}
                        title={() => <TableHeader title="Đơn đã nhận" />}
                    />
                    <Table
                        dataSource={data}
                        columns={columns}
                        pagination={{position: ['bottomCenter']}}
                        title={() => <TableHeader title="Đơn đã hủy" />}
                    />
                </Content>
            </Layout>
        </Layout>
    )

}

export default OrderTable;