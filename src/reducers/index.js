import { combineReducers } from "redux";

import userReducer from "./UserReducer";
import restaurantReducer from "./RestaurantReducer";

const rootReducer = combineReducers({
    user: userReducer,
    restaurant: restaurantReducer
})

export default rootReducer;