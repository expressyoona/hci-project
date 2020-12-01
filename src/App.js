import MyHeader from "components/header";
import Home from "components/home";
import AdminConsole from "components/admin";

const App = () => {
  return (
    <div className="App">
      <MyHeader />
      <AdminConsole />
      {/* <Home /> */}
    </div>
  );
}

export default App;
