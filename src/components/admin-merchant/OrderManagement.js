import React, { useEffect } from "react";
import { Button, Table } from "antd";

const OrderTable = () => {

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
            <a>Chi tiết</a>
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
        <>
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
        </>
    )

}

export default OrderTable;