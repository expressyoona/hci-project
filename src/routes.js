// General
import Home from "components/home";
import LoginForm from "components/login";
import Restaurant from "components/restaurant/index";
import Cart from "components/cart/index";
import CheckOut from "components/checkout/index";
import AddAddress from "components/checkout/addaddress";
import MerchantRegister from "components/merchant";


// Admin
import AdminConsole from "components/admin";
import RestaurantContent from "components/admin/restaurant_content/RestaurantContent";
import RestaurantInfo from "components/admin/restaurant_content/RestaurantInfo";
import UserContent from "components/admin/user_content/UserContent";
import OrderContent from "components/admin/order_content/index";

// Merchant Admin
import RestaurantSummary from "components/admin-merchant/Summary";
import MerchantLogin from "components/admin-merchant/MerchantLogin";
import OrderTable from "components/admin-merchant/OrderManagement";


const route = {
    general: [
        { path: '/', component: <Home /> },
        { path: '/login', component: <LoginForm /> },    
        { path: '/restaurant', component: <Restaurant />},
        { path: '/cart', component: <Cart />},
        { path: '/checkout', component: <CheckOut />},
        { path: '/addaddress', component: <AddAddress />},
        { path: '/merchant-register', component: <MerchantRegister />}
    ],
    admin: [
        { path: '/admin', component: <AdminConsole /> },
        { path: '/admin/restaurant', component: <RestaurantContent /> },
        { path: '/admin/restaurant/detail', component: <RestaurantInfo /> },
        { path: '/admin/user', component: <UserContent /> },
        { path: '/admin/order', component: <OrderContent /> }
    ],
    merchant: [
        { path: '/merchant-admin', component: <RestaurantSummary />},
        { path: '/merchant-admin/order', component: <OrderTable />},
        { path: '/merchant-admin/login', component: <MerchantLogin />}
    ]
}

export default route;