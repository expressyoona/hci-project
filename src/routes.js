import Home from "components/home";
import LoginForm from "components/login";
import AdminConsole from "components/admin";
import Restaurant from "components/restaurant/index";


const route = [
    { path: '/', component: <Home /> },
    { path: '/login', component: <LoginForm /> },
    { path: '/admin', component: <AdminConsole /> },
    { path: '/restaurant', component: <Restaurant />},
];

export default route;