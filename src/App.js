import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Layout } from "antd";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Redux
import rootReducer from "reducers";


// Admin
import AdminHeader from "components/admin/AdminHeader";
import AdminSider from "components/admin/AdminSider";
import AdminStyle from "components/admin/styles";

// General
import Header from "components/header";
import Footer from "components/footer";
import PageNotFound from "components/404";
import route from "routes";

const App = () => {

  const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();
  const store = createStore(rootReducer, enableReduxDevTools);
  const { Content } = Layout;

  return (
    <Provider store={store}>
    <Router>
      <Switch>
        {/* Admin */}
        {route.admin.map((item, index) => {
          return (
            <Route key={index} exact={true} path={item.path}>
              <Layout>
                <AdminSider />
                <Layout>
                  <AdminHeader />
                  <Content style={AdminStyle.ContentRoot}>
                    {item.component}
                  </Content>
                </Layout>
              </Layout>
              
            </Route>
          )
        })}
        {/* General */}
        {route.general.map((item, index) => {
          return (
            <Route key={index} exact={true} path={item.path}>
              <Header />
              {item.component}
              <Footer />
            </Route>
          )
        })}
        {/* Merchant Admin */}
        {route.merchant.map((item, index) => (
          <Route key={index} exact={true} path={item.path}>
            {item.component}
          </Route>
        ))}
        <Route component={PageNotFound} />
      </Switch>
      
    </Router>
    </Provider>
  );
}

export default App;
