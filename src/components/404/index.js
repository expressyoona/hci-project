import React from "react";
import { Button, Result } from "antd";

const PageNotFound = () => {
    
    return (
        <Result
            status="404"
            title="404"
            subTitle="Trang bạn vừa truy cập không tồn tại"
            extra={<Button href="/" type="primary">Trở về trang chủ trang chủ</Button>}
        />
    )

}

export default PageNotFound;