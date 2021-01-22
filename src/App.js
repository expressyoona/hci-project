import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Layout } from "antd";

// Admin
import AdminHeader from "components/admin/AdminHeader";
import AdminSider from "components/admin/AdminSider";
import AdminStyle from "components/admin/styles";

// General
import Header from "components/header";
import Footer from "components/footer";
import route from "routes";

const App = () => {

  const { Content } = Layout;

  return (
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
      </Switch>
      
    </Router>
  );
}

export default App;
