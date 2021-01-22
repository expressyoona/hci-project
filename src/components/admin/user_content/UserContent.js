import React from "react";
import { Breadcrumb } from "antd";

import UserContentStyle from "./style";

const UserContent = () => {
    return (
        <div style={UserContentStyle.root}>
            <Breadcrumb>
                <Breadcrumb.Item href="user">Người dùng</Breadcrumb.Item>
                <Breadcrumb.Item href="" style={UserContentStyle.breadcrumb}>Thông tin</Breadcrumb.Item>
            </Breadcrumb>

        </div>
    )
}

export default UserContent;