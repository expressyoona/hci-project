import route from "routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (      
    <Router>
      <ul>
        <li>
          <Link to='/'>Index</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul>

      <Switch>
        {route.map(item => {
          return (
            <Route exact={true} path={item.path}>
              {item.component}
            </Route>
          )
        })}
      </Switch>
    </Router>
  );
}

export default App;
