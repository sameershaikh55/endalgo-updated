import { Route, Switch } from "react-router";

// IMPORTING CSS
import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORTING COMPONENTS
import ScrollToTop from "./components/ScrollToTop.jsx";

// IMPORTING PAGES
// import WhyEndalgo from "./pages/WhyEndalgo";
// import GroupManagement from "./pages/GroupManagement";
// import EndalgoHome from "./pages/EndalgoHome";
import SchedullingP from "./pages/Schedulling";

function App() {
	return (
		<>
			<ScrollToTop />
			<Switch>
				{/* <Route exact path="/" component={EndalgoHome} />
				<Route exact path="/why" component={WhyEndalgo} />
				<Route exact path="/group_management" component={GroupManagement} /> */}
				<Route exact path="/" component={SchedullingP} />
			</Switch>
		</>
	);
}

export default App;
