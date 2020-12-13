import route from "routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "components/header";
import Footer from "components/footer";



const App = () => {
  return (      
    <Router>
      <Header />
      {/* <ul>
        <li>
          <Link to='/'>Index</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul> */}
      
      <Switch>
        {route.map((item, index) => {
          return (
            <Route key={index} exact={true} path={item.path}>
              {item.component}
            </Route>
          )
        })}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
