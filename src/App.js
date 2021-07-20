import { Route, Switch } from "react-router";
import { useEffect } from "react";

// IMPORTING CSS
import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

// IMPORTING COMPONENTS
import ScrollToTop from "./components/ScrollToTop.jsx";

// IMPORTING PAGES
import SchedullingP from "./pages/Schedulling";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Feature from "./pages/Feature";

// IMPORTING ANIMATIONS
import AOS from "aos";

function App() {
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);

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
