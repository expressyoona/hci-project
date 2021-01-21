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

// Merchant Admin
import MerchantAdmin from "components/admin-merchant";

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
        { path: '/admin', component: <AdminConsole /> }
    ],
    merchant: [
        { path: '/merchant-admin', component: <MerchantAdmin />}
    ]
}

export default route;