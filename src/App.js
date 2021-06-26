import { Route, Switch } from "react-router";
import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import WhyEndalgo from "./pages/WhyEndalgo";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={WhyEndalgo} />
		</Switch>
	);
}

export default App;
