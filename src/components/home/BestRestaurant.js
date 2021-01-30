import React, { useCallback, useEffect } from 'react';
import { Row, Col, Typography, List, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";

// import HomeStyle from "./styles";
import RestaurantService from "services/RestaurantService";
import RestaurantItem from "./RestaurantItem";

const BestRestaurant = () => {

    const { Title } = Typography;
    // const [topRestaurantList, setTopRestaurantList] = useState([]);
    const topRestaurantList = useSelector(state => state.restaurant.topRestaurant);
    const dispatch = useDispatch();

    const handleDataChange = useCallback((snapshot) => {
        let l = []
        snapshot.forEach(snap => {
            // console.log(snap.val());
            l.push(snap.val());
        });
        // setTopRestaurantList(l);
        dispatch({ type: 'LOADED_TOP_RESTAURANT', payload: l});
    }, [dispatch]);

    useEffect(() => {
        RestaurantService.getAll().once('value', handleDataChange);

        return () => {
            RestaurantService.getAll().off('value', handleDataChange);
        }
    }, [handleDataChange]);

    return (
        <Row>
            <Col span={16} offset={4}>
                <Title level={3} style={{textAlign: "center", textTransform: "uppercase"}}>Top nhà hàng nổi bật trong tháng</Title>
                {topRestaurantList ? <List 
                    grid={{
                        gutter: [30, 15],
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 4,
                        xxl: 4,
                    }}
                    dataSource={topRestaurantList} 
                    renderItem={item => (
                        <List.Item>
                            <RestaurantItem data={item} />
                        </List.Item>
                    )}
                /> : <Skeleton.Input style={{ width: 1200, height: 300}} active />}
                
            </Col>
        </Row>
    )
}

export default BestRestaurant;