import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "components/header";
import Footer from "components/footer";
import route from "routes";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Admin */}
        {route.admin.map((item, index) => {
          return (
            <Route key={index} exact={true} path={item.path}>
              {item.component}
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
