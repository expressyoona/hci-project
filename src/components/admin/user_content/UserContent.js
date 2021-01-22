import React, { useState } from "react";
import { Breadcrumb, Table, Input, Button, Space } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import UserContentStyle from "./style";
import "./tableStyle.css"
  
const data = [
    {
      key: "1",
      userID: "VN1888",
      userName: "Trịnh Văn Khánh",
      userAddress: "163 Hà Huy Tập, Quận Thanh Khê, Đà Nẵng",
      userTime: "05/10/2020",
      userPhoneNumber: "0931972985",
      userEmail: "tvkhanh@gmail.com",
      userBankID: "2000200625817",
      choice: "xx"
    },
    {
        key: "2",
        userID: "VN1587",
        userName: "Trần Viết Thành",
        userAddress: "29 Lê Duẩn, P. Hải Châu 1, Quận Hải Châu, Đà Nẵng",
        userTime: "12/11/2020",
        userPhoneNumber: "0335481668",
        userEmail: "tvthanh@gmail.com",
        userBankID: "2658561232979",
        choice: "xx"
    },
    {
        key: "3",
        userID: "VN1658",
        userName: "Phan Đức Mạnh",
        userAddress: "151 An Dương Vương, Quận Ngũ Hành Sơn, Đà Nẵng",
        userTime: "30/10/2020",
        userPhoneNumber: "0548221568",
        userEmail: "pdmanh@gmail.com",
        userBankID: "2369766652699",
        choice: "xx"
    },
    {
        key: "4",
        userID: "VN0358",
        userName: "Đỗ Thành Tuân",
        userAddress: "212 Hải Phòng, Quận Thanh Khê, Đà Nẵng",
        userTime: "08/10/2020",
        userPhoneNumber: "0321587256",
        userEmail: "dttuan@gmail.com",
        userBankID: "1649526259595",
        choice: "xx"
    },
    {
        key: "5",
        userID: "VN1574",
        userName: "Nguyễn Văn Duy Hùng",
        userAddress: "200 Cù Chính Lan, Quận Thanh Khê, Đà Nẵng",
        userTime: "20/10/2020",
        userPhoneNumber: "0348219916",
        userEmail: "nvduyhung@gmail.com",
        userBankID: "1472583699949",
        choice: "xx"
    },
    {
        key: "6",
        userID: "VN3587",
        userName: "Nguyễn Quang Huy",
        userAddress: "341 Hùng Vương, P. Vĩnh Trung, Quận Thanh Khê, Đà Nẵng",
        userTime: "17/11/2020",
        userPhoneNumber: "0934675642",
        userEmail: "nqhuy@gmail.com",
        userBankID: "1855615689875",
        choice: "xx"
    },
    {
        key: "7",
        userID: "VN8725",
        userName: "Ngô Quang Khải",
        userAddress: "187 Hồ Nguyên Trừng, Quận Hải Châu, Đà Nẵng",
        userTime: "21/10/2020",
        userPhoneNumber: "0321955888",
        userEmail: "nqkhai@gmail.com",
        userBankID: "4564651916151",
        choice: "xx"
    },
    {
        key: "8",
        userID: "VN2387",
        userName: "Phạm Văn Trung Kiên",
        userAddress: "128 Nguyễn Thị Định, Quận Sơn Trà, Đà Nẵng",
        userTime: "24/09/2020",
        userPhoneNumber: "0931475896",
        userEmail: "pvtkien@gmail.com",
        userBankID: "8989611662626",
        choice: "xx"
    },
    {
        key: "9",
        userID: "VN1888",
        userName: "Trịnh Văn Khánh",
        userAddress: "163 Hà Huy Tập, Quận Thanh Khê, Đà Nẵng",
        userTime: "05/10/2020",
        userPhoneNumber: "0931972985",
        userEmail: "tvkhanh@gmail.com",
        userBankID: "2000200625817",
        choice: "xx"
      },
      {
          key: "10",
          userID: "VN1587",
          userName: "Trần Viết Thành",
          userAddress: "29 Lê Duẩn, P. Hải Châu 1, Quận Hải Châu, Đà Nẵng",
          userTime: "12/11/2020",
          userPhoneNumber: "0335481668",
          userEmail: "tvthanh@gmail.com",
          userBankID: "2658561232979",
          choice: "xx"
      },
      {
          key: "11",
          userID: "VN1658",
          userName: "Phan Đức Mạnh",
          userAddress: "151 An Dương Vương, Quận Ngũ Hành Sơn, Đà Nẵng",
          userTime: "30/10/2020",
          userPhoneNumber: "0548221568",
          userEmail: "pdmanh@gmail.com",
          userBankID: "2369766652699",
          choice: "xx"
      },
      {
          key: "12",
          userID: "VN0358",
          userName: "Đỗ Thành Tuân",
          userAddress: "212 Hải Phòng, Quận Thanh Khê, Đà Nẵng",
          userTime: "08/10/2020",
          userPhoneNumber: "0321587256",
          userEmail: "dttuan@gmail.com",
          userBankID: "1649526259595",
          choice: "xx"
      },
      {
          key: "13",
          userID: "VN1574",
          userName: "Nguyễn Văn Duy Hùng",
          userAddress: "200 Cù Chính Lan, Quận Thanh Khê, Đà Nẵng",
          userTime: "20/10/2020",
          userPhoneNumber: "0348219916",
          userEmail: "nvduyhung@gmail.com",
          userBankID: "1472583699949",
          choice: "xx"
      },
      {
          key: "14",
          userID: "VN3587",
          userName: "Nguyễn Quang Huy",
          userAddress: "341 Hùng Vương, P. Vĩnh Trung, Quận Thanh Khê, Đà Nẵng",
          userTime: "17/11/2020",
          userPhoneNumber: "0934675642",
          userEmail: "nqhuy@gmail.com",
          userBankID: "1855615689875",
          choice: "xx"
      },
      {
          key: "15",
          userID: "VN8725",
          userName: "Ngô Quang Khải",
          userAddress: "187 Hồ Nguyên Trừng, Quận Hải Châu, Đà Nẵng",
          userTime: "21/10/2020",
          userPhoneNumber: "0321955888",
          userEmail: "nqkhai@gmail.com",
          userBankID: "4564651916151",
          choice: "xx"
      },
      {
          key: "16",
          userID: "VN2387",
          userName: "Phạm Văn Trung Kiên",
          userAddress: "128 Nguyễn Thị Định, Quận Sơn Trà, Đà Nẵng",
          userTime: "24/09/2020",
          userPhoneNumber: "0931475896",
          userEmail: "pvtkien@gmail.com",
          userBankID: "8989611662626",
          choice: "xx"
      },
];

const UserContent = () => {

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
            title: 'Số thứ tự',
            dataIndex: 'key',
            className: 'style',
        },
        {
            title: 'Mã người dùng',
            dataIndex: 'userID',
            className: 'style',
            ...getColumnSearchProps('userID'),
        },
        {
            title: 'Tên người dùng',
            dataIndex: 'userName',
            className: 'style',
            ...getColumnSearchProps('userName'),
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'userAddress',
            className: 'style',
            ...getColumnSearchProps('userAddress'),
        },
        {
            title: 'Thời gian đăng ký',
            dataIndex: 'userTime',
            className: 'style',
            ...getColumnSearchProps('userTime'),
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'userPhoneNumber',
            className: 'style',
            ...getColumnSearchProps('userPhoneNumber'),
        },
        {
            title: 'Email',
            dataIndex: 'userEmail',
            className: 'style',
            ...getColumnSearchProps('userEmail'),
        },
        {
            title: 'Tài khoản ngân hàng',
            dataIndex: 'userBankID',
            className: 'style',
            ...getColumnSearchProps('userBankID'),
        },
    ];

    return (
        <div style={UserContentStyle.root}>
            <Breadcrumb>
                <Breadcrumb.Item href="user">Người dùng</Breadcrumb.Item>
                <Breadcrumb.Item href="" style={UserContentStyle.breadcrumb}>Thông tin</Breadcrumb.Item>
            </Breadcrumb>
            <Table style={UserContentStyle.table} bordered={true} columns={columns} dataSource={data} size="small" pagination={{position: ['bottomCenter']}} />
        </div>
    )
}

export default UserContent;