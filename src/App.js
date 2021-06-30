import { Route, Switch } from "react-router";

// IMPORTING CSS
import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORTING PAGES
import WhyEndalgo from "./pages/WhyEndalgo";
import GroupManagement from "./pages/GroupManagement";
import EndalgoHome from "./pages/EndalgoHome";

function App() {
  return (
    <Switch>
      <Route exact path="/1" component={WhyEndalgo} />
      <Route exact path="/2" component={GroupManagement} />
      <Route exact path="/3" component={EndalgoHome} />
    </Switch>
  );
}

export default App;
