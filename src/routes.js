import Home from "components/home";
import LoginForm from "components/login";
import AdminConsole from "components/admin";


const route = [
    { path: '/', component: <Home /> },
    { path: '/login', component: <LoginForm /> },
    { path: '/admin', component: <AdminConsole /> },
];

export default route;