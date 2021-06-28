import { Route, Switch } from "react-router";

// IMPORTING CSS
import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORTING PAGES
import WhyEndalgo from "./pages/WhyEndalgo";
import GroupManagement from "./pages/GroupManagement";

function App() {
	return (
		<Switch>
			{/* <Route exact path="/" component={WhyEndalgo} /> */}
			<Route exact path="/" component={GroupManagement} />
		</Switch>
	);
}

export default App;
