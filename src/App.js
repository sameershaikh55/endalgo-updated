import { Route, Switch } from "react-router";

// IMPORTING CSS
import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORTING COMPONENTS
import ScrollToTop from "./components/ScrollToTop.jsx";

// IMPORTING PAGES
import SchedullingP from "./pages/Schedulling";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Feature from "./pages/Feature";

function App() {
	return (
		<>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={SchedullingP} />
				<Route exact path="/pricing" component={Pricing} />
				<Route exact path="/faq" component={Faq} />
				<Route exact path="/feature" component={Feature} />
			</Switch>
		</>
	);
}

export default App;
