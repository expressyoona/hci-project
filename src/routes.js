import Home from "components/home";
import LoginForm from "components/login";
import AdminConsole from "components/admin";
import Restaurant from "components/restaurant/index";

const route = {
    general: [
        { path: '/', component: <Home /> },
        { path: '/login', component: <LoginForm /> },    
        { path: '/restaurant', component: <Restaurant />}
    ],
    admin: [
        { path: '/admin', component: <AdminConsole /> }
    ]
}

export default route;