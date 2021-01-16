import Home from "components/home";
import LoginForm from "components/login";
import AdminConsole from "components/admin";
import Restaurant from "components/restaurant/index";
import Cart from "components/cart/index";
import CheckOut from "components/checkout/index";

const route = {
    general: [
        { path: '/', component: <Home /> },
        { path: '/login', component: <LoginForm /> },    
        { path: '/restaurant', component: <Restaurant />},
        { path: '/cart', component: <Cart />},
        { path: '/checkout', component: <CheckOut />}
    ],
    admin: [
        { path: '/admin', component: <AdminConsole /> }
    ]
}

export default route;